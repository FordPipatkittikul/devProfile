"use client";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const ProfileLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header header="Developer Profile" description="Edit your profile here!" showLinks={false} />
      {children}
      <Footer />
    </>
  );
};

export default ProfileLayout;
