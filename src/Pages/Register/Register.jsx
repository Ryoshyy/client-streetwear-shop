import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import styles from "./Register.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth.js";

export const Register = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "romantony3k@gmail.com",
      password: "1231233",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert("invalid Registration");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    console.log("success");
  };

  if (isAuth) {
    return navigate("/");
  }

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Registration
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register("email", { required: "Write-Mail" })}
          className={styles.field}
          label="E-Mail"
          fullWidth
        />
        <TextField
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          type="password"
          {...register("password", { required: "Write-Password" })}
          className={styles.field}
          label="Password"
          fullWidth
        />
        <TextField
          error={Boolean(errors.firstname?.message)}
          helperText={errors.firstname?.message}
          {...register("firstname", { required: "Write-Firstname" })}
          className={styles.field}
          label="First name"
          fullWidth
        />
        <TextField
          error={Boolean(errors.lastname?.message)}
          helperText={errors.lastname?.message}
          {...register("lastname", { required: "Write-Lastname" })}
          className={styles.field}
          label="Last name"
          fullWidth
        />
        <TextField
          error={Boolean(errors.phoneNumber?.message)}
          helperText={errors.phoneNumber?.message}
          {...register("phoneNumber", { required: "Write-Phone-Number" })}
          className={styles.field}
          label="Phone"
          fullWidth
        />
        <TextField
          error={Boolean(errors.address?.message)}
          helperText={errors.address?.message}
          {...register("address", { required: "Write-Address" })}
          className={styles.field}
          label="Address"
          fullWidth
        />

        <TextField
          error={Boolean(errors.dateOfBirth?.message)}
          helperText={errors.dateOfBirth?.message}
          {...register("dateOfBirth", {
            required: "Write-Date-Of-Birth",
          })}
          type="date"
          label="Date-Of-Birth"
          defaultValue={formattedDate}
          fullWidth
        />

        <Button type="submit" size="large" variant="contained" fullWidth>
          register
        </Button>
      </form>
    </Paper>
  );
};
