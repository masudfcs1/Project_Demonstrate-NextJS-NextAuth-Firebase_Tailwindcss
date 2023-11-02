import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query
} from "firebase/firestore";
import { useEffect, useState } from "react";
import app from "@/Shared/firebaseConfig";
import ProjectList from "@/components/Profile/ProjectList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const db = getFirestore(app);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);
  const getAllProjects = async () => {
    const q = query(collection(db, "Projects"), orderBy("id", "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setProjects((projects) => [...projects, doc.data()]);
    });
  };
  return (
    <main>
      <div className="p-5">
        <h2 className="text-[25px] mb-[-15px]"> All Latest Projects </h2>{" "}
        {projects ? <ProjectList userProject={projects} /> : null}{" "}
      </div>{" "}
    </main>
  );
}
