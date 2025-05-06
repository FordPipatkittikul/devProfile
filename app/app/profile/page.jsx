"use client"

import ProfileLayout from "@/components/layout/ProfileLayout";
import AboutMe from "@/components/AboutMe";
import CareerInterest from "@/components/card/CareerInterest";
import Education from "@/components/card/Education";
import ProfessionalExperience from "@/components/card/ProfessionalExperience";
import Project from "@/components/card/project";
import Skills from "@/components/card/Skills";
import Languages from "@/components/card/Languages";

const ProfilePage = () => {
  return (
    <ProfileLayout>
      <AboutMe />
      <CareerInterest />
      <Education />
      <ProfessionalExperience />
      <Project />
      <Skills />
      <Languages />
    </ProfileLayout>
  );
};

export default ProfilePage;