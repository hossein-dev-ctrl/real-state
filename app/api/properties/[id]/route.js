import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  await connectDB();
  try {
    const property = await Property.findById(params.id).lean();

    if (!property)
      return new Response(
        JSON.stringify({ message: "این ملک وجود ندارد" }, { status: 404 })
      );

    return new Response(JSON.stringify({ property }, { status: 200 }));
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "خطای سمت سرور" }, { status: 500 })
    );
  }
};
