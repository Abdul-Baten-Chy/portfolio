import { useAuth } from "@/hooks/useAuth";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const user = {
    email: "me@gmail.com",
    password: "123456pass",
  };

  const submitForm: SubmitHandler<FieldValues> = async (formData) => {
    try {
      if (
        formData.email === user.email &&
        formData.password === user.password
      ) {
        setAuth(formData); // Pass formData directly if that’s how your context is structured
        localStorage.setItem("auth", JSON.stringify(formData)); // Store the form data
        navigate("/dashBoard");
      }
    } catch (error) {
      console.error("Login failed", error); // Handle the error
    }
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px] mt-20 mx-auto min-h-screen flex flex-col items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <input
        {...register("email", { required: "Email ID is required" })}
        className="w-[300px] py-2 px-2 bg-slate-200"
        type="email"
        name="email"
        placeholder="Type your Email"
        id="email"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}{" "}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Your password must be at least 8 characters",
          },
        })}
        className="w-[300px] py-2 px-2 bg-slate-200 mt-6"
        type="password"
        name="password"
        placeholder="Type your Password "
        id="password"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}{" "}
      <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 bg-blue-500 mt-6 px-6 py-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
