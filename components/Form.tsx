import { useState } from "react";
import { z } from "zod";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import FloatingLabelInput from "./FloatingLabel";
import Button from "./Button";
import { joinClassNames } from "@/utils/joinClassNames";
import { updateFfernFriend } from "@/utils/api";
import { GetFfernFriendResponse, UpdateFfernFriendsErrorResponse, UpdateFfernFriendsRequest } from "@/types/types";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .regex(/^[a-zA-Z]+$/, { message: "First name must only contain letters" }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .regex(/^[a-zA-Z]+$/, { message: "Last name must only contain letters" }),

  addressLineOne: z.string().min(5, { message: "Address Line 1 must be at least 5 characters" }),
  addressLineTwo: z.string().optional(),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters" })
    .regex(/^[a-zA-Z]+$/, { message: "City must only contain letters" }),

  postcode: z.string().min(4, { message: "Postcode must be at least 4 characters" }),

  stateOrCounty: z
    .string()
    .min(2, { message: "State/County must be at least 2 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "State/County must only contain letters and spaces" }),

  country: z.enum(["US", "NL", "GB"]),
});

const Form = () => {
  const [formData, setFormData] = useState<UpdateFfernFriendsRequest>({
    firstName: "",
    lastName: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    postcode: "",
    stateOrCounty: "",
    country: "US", // Default to a valid option
  });

  const [errors, setErrors] = useState<{ [key in keyof UpdateFfernFriendsRequest]?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const mutation: UseMutationResult<GetFfernFriendResponse, UpdateFfernFriendsErrorResponse, UpdateFfernFriendsRequest> =
    useMutation({
      mutationFn: (data: UpdateFfernFriendsRequest) => updateFfernFriend(data.lastName, data),
      onSuccess: () => {
        setSubmitted(true);
      },
      onError: (error: UpdateFfernFriendsErrorResponse) => {
        console.error("Error submitting the form:", error);
      },
    });

  const handleChange = (key: keyof UpdateFfernFriendsRequest, value: string) => {
    setFormData({ ...formData, [key]: value });

    // Clear the error for the current field as the user types
    if (errors[key]) {
      setErrors((prevErrors) => ({ ...prevErrors, [key]: undefined })); // Clear the error for the specific field
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse(formData);

    if (result.success) {
      mutation.mutate(result.data);
      setErrors({});
    } else {
      const errorMap = result.error.format();
      const mappedErrors: { [key in keyof UpdateFfernFriendsRequest]?: string } = {};

      (Object.keys(errorMap) as Array<keyof typeof formData>).forEach((key) => {
        const error = errorMap[key];
        if (error && Array.isArray(error._errors) && error._errors.length > 0) {
          mappedErrors[key] = error._errors[0];
        }
      });

      setErrors(mappedErrors);
    }
  };

  const isFormValid = () => {
    const result = schema.safeParse(formData);
    return result.success;
  };

  if (submitted) {
    return (
      <div className="p-5 bg-[#e7f5e9] border border-green-400">
        <p className="mb-5">Thank you!</p>
        <p>Your new fragrance will be with you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 bg-[#e2d6c5] max-w-4xl mx-auto">
      {!mutation.isPending && (
        <>
          <div className="flex gap-4 md:gap-8">
            <FloatingLabelInput
              id="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={(value) => handleChange("firstName", value)}
              error={errors.firstName}
            />
            <FloatingLabelInput
              id="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => handleChange("lastName", value)}
              error={errors.lastName}
            />
          </div>

          <FloatingLabelInput
            id="addressLine1"
            label="Address Line 1"
            value={formData.addressLineOne}
            onChange={(value) => handleChange("addressLineOne", value)}
            error={errors.addressLineOne}
          />

          <FloatingLabelInput
            id="addressLine2"
            label="Address Line 2 (Optional)"
            value={formData.addressLineTwo || ""}
            onChange={(value) => handleChange("addressLineTwo", value)}
          />

          <div className="flex gap-4 md:gap-8">
            <FloatingLabelInput
              id="city"
              label="City"
              value={formData.city}
              onChange={(value) => handleChange("city", value)}
              error={errors.city}
            />
            <FloatingLabelInput
              id="postcode"
              label="Postcode"
              value={formData.postcode}
              onChange={(value) => handleChange("postcode", value)}
              error={errors.postcode}
            />
          </div>

          <FloatingLabelInput
            id="stateOrCounty"
            label="State/County"
            value={formData.stateOrCounty}
            onChange={(value) => handleChange("stateOrCounty", value)}
            error={errors.stateOrCounty}
          />

          <div className="relative mt-4 w-full">
            <select
              id="country"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value as "US" | "NL" | "GB")}
              className={joinClassNames(
                "block w-full px-4 pt-7 pb-3 text-base text-[#030302] rounded-md transition-all duration-200 focus:outline-none border-2 border-white",
                !!errors.country
                  ? "border-[#EF9A9A] focus:border-[#EF9A9A] bg-[#FFEBEE]"
                  : "hover:border-[#F1BEA2] focus:border-[#D0865D]"
              )}
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="US">USA</option>
              <option value="NL">Netherlands</option>
              <option value="GB">United Kingdom</option>
              {/* Add other countries as needed */}
            </select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
            <label
              htmlFor="country"
              className={joinClassNames(
                "absolute left-4 text-[#95968A] transition-all duration-200",
                formData.country ? "-translate-y-5 text-sm top-7 left-4" : "translate-y-2 top-4 transform"
              )}
            >
              Country
            </label>
          </div>
        </>
      )}

      <div className="mt-4">
        <Button text={mutation.isPending ? "Sending..." : "Confirm address"} disabled={!isFormValid()} />
      </div>
    </form>
  );
};

export default Form;
