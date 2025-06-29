package com.company.project.apis;

import com.company.project.models.Pet;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.http.ContentType;

public class PetApi {

    private static final String BASE_URI = "https://petstore3.swagger.io/api/v3";
    private final RequestSpecification requestSpec;

    public PetApi() {
        this.requestSpec = RestAssured.given()
                .baseUri(BASE_URI)
                .contentType(ContentType.JSON);
    }

    public Response createPet(Pet pet) {
        return requestSpec
                .body(pet)
                .when()
                .post("/pet");
    }

    public Response getPetById(int petId) {
        return requestSpec
                .when()
                .get("/pet/" + petId);
    }

    public Response updatePet(Pet pet) {
        return requestSpec
                .body(pet)
                .when()
                .put("/pet");
    }

    public Response deletePetById(int petId) {
        return requestSpec
                .when()
                .delete("/pet/" + petId);
    }
}
