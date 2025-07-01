package com.company.project.tests;

import com.company.project.apis.PetApi;
import com.company.project.models.Category;
import com.company.project.models.Pet;
import com.company.project.models.Tag;
import io.qameta.allure.*;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.Collections;
import org.testng.annotations.DataProvider;

@Epic("Swagger Pet API Tests")
@Feature("Pet API Tests")
@Severity(SeverityLevel.CRITICAL)
public class PetApiTest {

    private PetApi petAPI;

    @BeforeClass
    @Step("Initialize Pet API client")
    public void setup() {
        petAPI = new PetApi();
    }


    @DataProvider(name = "petDataProvider")
    public Object[][] petDataProvider() {
        return new Object[][] {
                {
                        new Pet(
                                10,
                                "Pretty dog",
                                new Category(1, "Dogs"),
                                Collections.singletonList("https://test.com/dog.jpg"),
                                Collections.singletonList(new Tag(101, "cute")),
                                "available"
                        )
                },
                {
                        new Pet(
                                16,
                                "",
                                new Category(2, "Cats"),
                                Collections.singletonList("https://test.com/cat.jpg"),
                                Collections.singletonList(new Tag(102, "exotic")),
                                "sold"
                        )
                },
                {
                        new Pet(
                                17,
                                "Snake with very long name, to check that pet creation still works",
                                new Category(3, "Reptiles"),
                                Collections.singletonList("https://tes.com/snake.jpg"),
                                Collections.singletonList(new Tag(1030625, "longname")),
                                "pending"
                        )
                },
                {
                        new Pet(
                                103,
                                "Special chars in name 🐶🐱",
                                new Category(4, "Mixed"),
                                Collections.singletonList("https://example.com/mix.jpg"),
                                Collections.singletonList(new Tag(104, "emoji")),
                                "available"
                        )
                }
        };
    }


    @Test(dataProvider = "petDataProvider", description = "Verify pet creation with different inputs")
    @Story("Create Pet")
    @Severity(SeverityLevel.NORMAL)
    @Description("This test validates that a new pet can be created and response contains correct name and status.")
    public void testCreatePet(Pet pet) {
        Allure.step("Send POST request to create a new pet");
        Response response = petAPI.createPet(pet);

        Allure.step("Validate status code is 200");
        Assert.assertEquals(response.getStatusCode(), 200);

        Allure.step("Validate response contains the correct id");
        Assert.assertEquals(response.jsonPath().getInt("id"), pet.getId());

        Allure.step("Validate response contains the correct name");
        Assert.assertEquals(response.jsonPath().getString("name"), pet.getName());

        Allure.step("Validate response contains the correct status");
        Assert.assertEquals(response.jsonPath().getString("status"), pet.getStatus());
    }

    @Test(description = "Verify getting pet by ID returns correct pet")
    @Story("Get Pet by ID")
    @Severity(SeverityLevel.BLOCKER)
    @Description("This test verifies that a pet with ID 10 can be fetched and has correct details.")
    public void testGetPetById() {
        int petId = 10;

        Allure.step("Send GET request to fetch pet by ID");
        Response response = petAPI.getPetById(petId);

        Allure.step("Validate status code is 200");
        Assert.assertEquals(response.getStatusCode(), 200);

        Allure.step("Validate response contains correct pet ID");
        Assert.assertEquals(response.jsonPath().getInt("id"), petId);
    }

    @Test(description = "Verify updating a pet returns correct updated data")
    @Story("Update Pet")
    @Severity(SeverityLevel.CRITICAL)
    @Description("This test updates a pet and validates that the response contains the updated pet details.")
    public void testUpdatePet() {
        Pet pet = new Pet();
        pet.setId(10);
        pet.setName("dogUpdated");
        pet.setCategory(new Category(1, "Cats"));
        pet.setPhotoUrls(Collections.singletonList("string"));
        pet.setTags(Collections.singletonList(new Tag(0, "tagUpdated")));
        pet.setStatus("available");

        Allure.step("Send PUT request to update pet with ID " + pet.getId());
        Response response = petAPI.updatePet(pet);

        Allure.step("Validate status code is 200");
        Assert.assertEquals(response.getStatusCode(), 200);

        Allure.step("Validate response contains the correct pet ID");
        Assert.assertEquals(response.jsonPath().getInt("id"), pet.getId());

        Allure.step("Validate response contains the updated pet name");
        Assert.assertEquals(response.jsonPath().getString("name"), pet.getName());

        Allure.step("Validate response contains the correct category ID");
        Assert.assertEquals(response.jsonPath().getInt("category.id"), pet.getCategory().getId());

        Allure.step("Validate response contains the correct category name");
        Assert.assertEquals(response.jsonPath().getString("category.name"), pet.getCategory().getName());

        Allure.step("Validate response contains the correct status");
        Assert.assertEquals(response.jsonPath().getString("status"), pet.getStatus());
    }

    @Test(description = "Verify deleting a pet removes it successfully")
    @Story("Delete Pet")
    @Severity(SeverityLevel.CRITICAL)
    @Description("This test deletes a pet by ID and verifies it was removed.")
    public void testDeletePetById() {
        int petIdDeletion = 11;

        Pet pet = new Pet();
        pet.setId(petIdDeletion);
        pet.setName("Exotic cat");
        pet.setCategory(new Category(1, "Cats"));
        pet.setPhotoUrls(Collections.singletonList("string"));
        pet.setTags(Collections.singletonList(new Tag(0, "tagTest")));
        pet.setStatus("available");

        Response createResponse = petAPI.createPet(pet);
        System.out.println("DELETE: Created pet with ID: " + petIdDeletion);
        Assert.assertEquals(createResponse.getStatusCode(), 200);

        Allure.step("Send DELETE request to remove pet with ID " + petIdDeletion);
        Response deleteResponse = petAPI.deletePetById(petIdDeletion);
        System.out.println("Raw response DELETE: " + petIdDeletion + " " + deleteResponse.asString());

        Allure.step("Validate DELETE status code is 200");
        Assert.assertEquals(deleteResponse.getStatusCode(), 200);

        Allure.step("Validate DELETE response body equals 'Pet deleted'");
        Assert.assertEquals(deleteResponse.asString(), "Pet deleted");
    }
}
