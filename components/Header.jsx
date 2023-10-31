import {
  HiOutlineArrowLeftOnRectangle,
  HiOutlinePencilSquare
} from "react-icons/hi2";
import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { data: session } = useSession();

  const user_image =
    "https://images.unsplash.com/photo-1552005709-0d51c1db5f1a?auto=format&fit=crop&q=80&w=1946&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  console.log(session);
  const router = useRouter();
  return (
    <div className=" flex justify-between p-2 border-b-[1px] shadow-lg border-blue-200 ">
      <Link href="/">
        <img src="/logo.png" alt="img" className=" w-10" />
      </Link>
      <div className=" flex gap-5">
        <button
          className=" px-3 p-2 bg-teal-600 text-white gap-2 rounded-full"
          onClick={() => router.push("/create-project")}
        >
          <span className=" hidden sm:block ">CREATE POST </span>
          <HiOutlinePencilSquare className=" sm:hidden" />
        </button>
        <button className=" px-3 p-2  bg-gray-600 text-white gap-2 rounded-full">
          {!session ? (
            <span className=" hidden sm:block" onClick={() => signIn()}>
              Sign In
            </span>
          ) : (
            <span
              className=" hidden sm:block capitalize"
              onClick={() => signOut()}
            >
              Sign Out
            </span>
          )}
          <HiOutlineArrowLeftOnRectangle className=" sm:hidden" />
        </button>

        {session ? (
          <Image
            src={session.user.image}
            width={50}
            height={40}
            alt="img"
            className="  rounded-full cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
}
