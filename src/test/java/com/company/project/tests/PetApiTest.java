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

    @Test(description = "Verify pet creation endpoint returns correct data")
    @Story("Create Pet")
    @Severity(SeverityLevel.NORMAL)
    @Description("This test validates that a new pet can be created and response contains correct name and status.")
    public void testCreatePet() {
        System.out.println("hey from Create: " );
        Pet pet = new Pet();
        pet.setId(10);
        pet.setName("Pretty dog");
        pet.setCategory(new Category(1, "Dogs"));
        pet.setPhotoUrls(Collections.singletonList("string"));
        pet.setTags(Collections.singletonList(new Tag(0, "testTag")));
        pet.setStatus("available");

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
        System.out.println("hey from Get: " );

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
        System.out.println("hey from Update: " );
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
        System.out.println("hey from Delete: " );

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
