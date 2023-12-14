import NavBar from "../../../components/Navbar";
import BasicInfo from "./Component/Basic-info";
import Bio from "./Component/Bio";
import EducationalInfo from "./Component/Educational-info";
import Hobbies from "./Component/Hobbies";
import PartnerMessage from "./Component/PartnerMessage";
import Photo from "./Component/Photo";
import ReligiousInfo from "./Component/Religious-info";
  
const EditProfile = () => {
  return (
    <>
      <NavBar />
      <Photo />
      <Bio />
      <PartnerMessage />
      <BasicInfo />
      <ReligiousInfo />
      <EducationalInfo />
      <Hobbies />
    </>
  );
};

export default EditProfile;
