import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { VscDeviceCamera } from "react-icons/vsc";
import profileSvc from "../../../../services/profile.service";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const Photo = () => {
  const { register, handleSubmit } = useForm();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [detail, setDetail] = useState();
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.User.loggedInUser);

  const onSubmit = async (data) => {
    try {
      //   const formData = new FormData();
      //   formData.append("image", data.image.value);
      const response = await profileSvc.addPhoto(data);
      if (response) {
        console.log(response);
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  const getProfile = async () => {
    try {
      if (loggedInUser) {
        const response = await profileSvc.getProfileById(
          loggedInUser?.profile?._id
        );
        setDetail(response.result);
        console.log("detail is ", detail);
      }
    } catch (exception) {
      throw exception;
    }
  };
  useEffect(() => {
    if (loggedInUser) {
      getProfile();
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (detail) {
      setSelectedImage(
        import.meta.env.VITE_IMAGE_URL + "/profile/" + detail?.image
      );
    }
  }, [detail]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const ext = file?.name.split(".").pop().toLowerCase();
    const supportedFormats = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "webp",
      "svg",
    ];

    if (supportedFormats.includes(ext)) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      register("image", { value: file });
    } else {
      console.error("Unsupported file format");
    }
  };

  return (
    <>
      <div className="w-[35%] mb-5 mt-[6rem] bg-white mx-auto flex justify-between shadow-md items-center rounded-3xl overflow-hidden">
        <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full min-h-[50vh] h-full flex flex-col justify-center items-center bg-white">
            <h3 className="text-center font-semibold text-2xl mb-3">
              Profile photo.
            </h3>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleImageChange(e);
                register("image");
              }}
              style={{ display: "none" }}
              id="imageInput"
              ref={register()}
            />
            <label
              htmlFor="imageInput"
              className="relative w-[200px] h-[200px] rounded-[50%]"
            >
              <img
                className="rounded-full object-cover w-full h-full object-center"
                src={
                  selectedImage ||
                  "https://www.caltrain.com/files/images/2021-09/default.jpg"
                }
                alt=""
              />
              <span className="absolute right-0 bottom-0">
                <VscDeviceCamera size={30} />
              </span>
            </label>
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 rounded-xl text-white text-xl my-3"
            >
              Add a Photo +
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Photo;
