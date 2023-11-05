import React, { useRef } from "react";
import Page from "./Page";
import { motion } from "framer-motion";
import Image from "next/image";
import ROUTES from "@/routes";
import imgSrc from "@public/vercel.svg";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";
import { info } from "@/data";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import { cursorMode, cursorText } from "@/components/CustomCursor/states";

type Inputs = {
    from_name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {};

function Contact({}: Props) {
    const router = useRouter();
    const emailStatus = useRef<true | false | null>(null);
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        if (
            !formData.from_name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        )
            return;
        emailjs
            .send(
                "service_06a7ly4",
                "template_mrydh16",
                formData,
                "K1iKT5M2YpJgK445h",
            )
            .then((result) => {
                emailStatus.current = result.status === 200;
            });
    };

    return (
        <Page headerInverted>
            <div className="pageContainer relative">
                <motion.div
                    layoutId="Contact"
                    transition={{ duration: 0.5 }}
                    className="fixed flex h-screen w-full items-center justify-center bg-dark"
                >
                    <Image
                        src={info.backgroundImage}
                        width={1080}
                        height={720}
                        alt="Picture of the author"
                        className="h-full w-full bg-dark object-cover opacity-10 blur-sm"
                    />
                </motion.div>

                <div className="relative z-50 flex h-full w-4/5 flex-col justify-center space-y-8 text-light max-sm:mx-auto sm:w-full">
                    <h4 className="mb-8 text-center text-4xl font-semibold tracking-[0.2rem]">
                        I'm the asset you're looking for.
                        <br />
                        <span className="border-b-2 border-primary/50 leading-[3.25rem]">
                            Let's talk.
                        </span>
                    </h4>

                    <div className="flex flex-col items-center space-y-6">
                        <div className="flex items-center space-x-5">
                            <FaPhone className="aspect-square w-7 animate-pulse justify-center text-primary" />
                            <p className="text-2xl">{info?.phoneNumber}</p>
                        </div>

                        <Link
                            href={`mailto:${info?.email}`}
                            className="flex items-center space-x-5"
                        >
                            <FaEnvelope className="aspect-square w-7 animate-pulse justify-center text-primary" />
                            <p className="text-2xl">{info?.email}</p>
                        </Link>

                        <div className="flex items-center space-x-5">
                            <FaMapPin className="aspect-square w-7 animate-pulse justify-center text-primary" />
                            <p className="text-2xl">{info?.address}</p>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex w-full flex-col space-y-2 sm:mx-auto sm:w-fit"
                    >
                        <div className="flex flex-col max-sm:space-y-2 sm:flex-row sm:space-x-2">
                            <input
                                {...register("from_name")}
                                placeholder="Name"
                                className="contactInput"
                                type="text"
                            />
                            <input
                                {...register("email")}
                                placeholder="Email"
                                className="contactInput"
                                type="email"
                            />
                        </div>

                        <input
                            {...register("subject")}
                            placeholder="Subject"
                            type="text"
                            className="contactInput"
                        />

                        <textarea
                            {...register("message")}
                            placeholder="Message"
                            className="contactInput max-h-40 resize-y"
                            maxLength={500}
                        />
                        <button
                            type="submit"
                            className="rounded-md bg-primary/40 px-10 py-5 font-secondary text-lg font-bold text-light transition-colors hover:bg-primaryDark/40"
                        >
                            Submit
                        </button>
                        {emailStatus.current !== null && (
                            <p
                                className={`-mb-24 w-full rounded-md py-3 text-center font-sans text-light ${
                                    emailStatus.current
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                }`}
                            >
                                {emailStatus.current
                                    ? "Email sent!"
                                    : "Email failed to send."}
                            </p>
                        )}
                    </form>
                    <BackButton
                        className="bg-primaryDark text-dark"
                        callback={() => {
                            cursorText.value = "";
                            cursorMode.value = "default";
                            router.push("/", "/#contact");
                        }}
                    />
                </div>
            </div>
        </Page>
    );
}

export default Contact;
