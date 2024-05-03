package service;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

import java.util.Objects;
import java.util.Stack;

@Path("/structure")
public class DataResource {
    // Endpoints don't have to consume information, they can just send back information when a request is made
    // To get the message from the frontend, we use the @Consumes("application/json")

    @GET
    @Path("/stack")
    @Consumes("application/json")
    @Produces("application/json")
    public Response updateDataStruct(String message){

        if (Objects.equals(message, "new node")){
            Stack<Integer> stack = new Stack<Integer>();
            // Pushing the new stack member
            stack.push(1);
            // Successful response
            return Response.status(Response.Status.OK)
                    // May need header Access control allow origin here
                    .build();
        }
        // Unsuccessful response
        return Response.status(Response.Status.BAD_REQUEST)
                .build();
    }
}
