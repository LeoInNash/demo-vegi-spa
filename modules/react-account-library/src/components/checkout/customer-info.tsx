import React, { ChangeEvent, forwardRef, useImperativeHandle } from "react";
import { Grid, TextField } from "@mui/material";

import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("First name on card is required")
    .max(128, "Maximum characters are 128"),
  lastName: yup
    .string()
    .required("Last name is required")
    .max(128, "Maximum characters are 128"),
  country: yup
    .string()
    .required("Country  is required")
    .max(128, "Maximum characters are 128"),
  address: yup
    .string()
    .required("Billing address is required")
    .max(128, "Maximum characters are 128"),
  city: yup
    .string()
    .required("City is required")
    .max(128, "Maximum characters are 128"),
  state: yup
    .string()
    .required("State is required")
    .max(128, "Maximum characters are 128"),
  postcode: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("Postcode is required")
    .test(
      "length",
      "Postcode must include 4 digits",
      (val) => !val || val.toString().length === 4
    ),
  phone: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("Phone is required")
    .max(128, "Maximum characters are 128"),
  email: yup
    .string()
    .email("Email must be valid form")
    .required("Email is required"),
});

export interface CustomerInfoProps {
  onSuccess?: (paymentMethodId: string) => void;
  onFailed?: (errorMessage?: string) => void;
  handleAddingCardState?: (isAddingCard?: boolean) => void;
}
const CustomerInfo = forwardRef(
  ({ onSuccess, onFailed }: CustomerInfoProps, ref) => {
    const onFieldBlur = async (event: FocusEvent, fieldName: string) => {
      const target = event.target as HTMLInputElement;
      target.value = target.value?.trim();
      formik.handleChange(event);
      await formik.validateField(fieldName);
      formik.handleBlur(event);
    };

    useImperativeHandle(ref, () => ({
      handleSubmit: async () => {
        const formErrors = await formik.validateForm();
        if (Object.keys(formErrors).length !== 0) {
          await formik.setTouched(
            Object.keys(formErrors).reduce(
              (result, currentKey) => ({
                ...result,
                [currentKey]: true,
              }),
              {}
            )
          );
          formik.setErrors(formErrors);
        }
        try {
          onSuccess && onSuccess("");
        } catch (e: any) {
          onFailed && onFailed("");
        }
      },
    }));

    const handlePostcodeChange = (event: ChangeEvent) => {
      const target = event.target as HTMLInputElement;

      if (
        Number.isNaN(Number(target.value)) ||
        target.value.includes(".") ||
        target.value.length > 4
      ) {
        return;
      }

      formik.handleChange(event);
    };

    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        city: "",
        state: "",
        postcode: "",
        phone: "",
        email: "",
      },
      validationSchema: validationSchema,
      onSubmit: () => {
        // Unused function; Manual submit form when click submit button
        console.log("On Submit");
      },
    });

    return (
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} padding={"20px 15px"}>
          <Grid item xs={6}>
            <TextField
              label="First name"
              fullWidth
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "firstName")}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={
                (formik.touched.firstName && formik.errors.firstName) as string
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last name"
              fullWidth
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "lastName")}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={
                (formik.touched.lastName && formik.errors.lastName) as string
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Address"
              fullWidth
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "address")}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={
                (formik.touched.address && formik.errors.address) as string
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="country"
              label="Country"
              fullWidth
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "country")}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={
                (formik.touched.country && formik.errors.country) as string
              }
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="state"
              label="State"
              fullWidth
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "state")}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={
                (formik.touched.state && formik.errors.state) as string
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="city"
              label="City"
              fullWidth
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "city")}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={(formik.touched.city && formik.errors.city) as string}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="postcode"
              label="Postcode"
              fullWidth
              value={formik.values.postcode}
              onChange={handlePostcodeChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "postcode")}
              error={formik.touched.postcode && Boolean(formik.errors.postcode)}
              helperText={
                (formik.touched.postcode && formik.errors.postcode) as string
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="phone"
              label="Phone"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "phone")}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={
                (formik.touched.phone && formik.errors.phone) as string
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={(e: unknown) => onFieldBlur(e as FocusEvent, "email")}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                (formik.touched.email && formik.errors.email) as string
              }
            />
          </Grid>
        </Grid>
      </form>
    );
  }
);

export default CustomerInfo;
