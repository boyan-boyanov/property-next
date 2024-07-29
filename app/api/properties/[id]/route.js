import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

//GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);

    if (!property) {
      return new Response("Property Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDB();

    const property = await Property.findById(propertyId);
    console.log(propertyId);
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }

    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    await property.deleteOne();

    return new Response("Property Deleted", { status: 200 });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
