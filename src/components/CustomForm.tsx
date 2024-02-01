import { useForm } from "react-hook-form";
import { Button } from "react-aria-components";
import type { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({ email: z.string().email() });

type TypeSchema = z.infer<typeof FormSchema>;

const CustomForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TypeSchema>({ resolver: zodResolver(FormSchema) });

  async function onSubmit(data: FieldValues) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    reset();
  }

  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="flex flex-col gap-4 items-center w-full"
    >
      <div className="w-full">
        <input
          {...register("email")}
          type="email"
          className="w-full rounded-md px-6 py-2 text-neutral-2"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="bg-primary-2 text-white text-sm p-1">
            Whooops, make sure it is an email
          </p>
        )}
      </div>

      <Button
        isDisabled={isSubmitting}
        type="submit"
        className="w-full rounded-md bg-primary-2 px-6 py-2 border border-solid border-primary-2 hover:bg-white hover:text-primary-2 focus-visible:bg-white focus-visible:text-primary-2 disabled:bg-neutral-1"
      >
        Contact Us
      </Button>
    </form>
  );
};

export default CustomForm;
