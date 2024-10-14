"use server";

const AddProperty = async (formData) => {
  console.log("Add Property", formData.getAll("amenities"));
};

export default AddProperty;
