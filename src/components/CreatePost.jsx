import React, { useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import usePublicHook, { useaxiosPublic } from "../Api/usePublicHook";
import { ToastContainer, toast } from "react-toastify";

const img_bb_api_key = import.meta.env.VITE_YOUR_CLIENT_API_KEY;

const uplog_img = `https://api.imgbb.com/1/upload?key=${img_bb_api_key}`;

function CreatePost() {

  
  const { user, loading } = useAuthMangedHook();

  const [error, seterror] = useState("");
  console.log(user);
  const useaxiosPublic = usePublicHook();

  const [button, setbutton] = useState(true);

  const createPost_button = async (event) => {

    setbutton(false)

    try {
      event.preventDefault();

      const data = new FormData(event.target);
      const data_form = Object.fromEntries(data);
      console.log(data_form);
      const { name, Title, Message, Category } = data_form;

      if (!name || name.length <= 4) {
        setbutton(true);

        toast.error("Post name must be 5 length");
        return;
      }
      if (!Title || Title.length <= 8) {
        setbutton(true);
        toast.error("Title name must be 8 length upper");
        return;
      }
      if (!Message) {
        setbutton(true);
        toast.error("Enter your Message");
        return;
      }
      if (Message.length < 20 || Message.length>50) {
        setbutton(true);
        toast.error("Message must be under 20 to 50  characters");
        return;
      }
      if(!Category)
      {
        setbutton(true);
        toast.error("Enter your category");
        return ;
      }
      
      if (Message.length>50) {
        setbutton(true)
        toast.error("Message must be between 20 and 50 characters");
        return;
      }

      const img = new FormData();

      img.append("image", data.get("image"));

      const res = await useaxiosPublic.post(uplog_img, img, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res.data?.data.display_url);

      if (!res.data?.data.display_url) {
        setbutton(true);
        toast.error("pleaes upload image");
        return;
      }

      // Get the current date in DD-MM-YYYY format
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, "0"); // Ensure two digits
      const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const year = currentDate.getFullYear();

      const postDate = `${day}-${month}-${year}`; // Format: DD-MM-YYYY

      const postUser = {
        PostName: name,
        Title: Title,
        Message: Message,
        Category: Category,
        Email: user?.email,
        Like: 0,
        Date: postDate,
        Name: user?.displayName,
        Image: res.data?.data.display_url,
        UnLike: 0,
        FollowPost: 0,
        Follow: 0,
      };

      console.log(postUser);

      useaxiosPublic
        .post("/create-post", postUser)
        .then((result) => {
          if (result.status == 200) {
            useaxiosPublic
              .put(`/count-post/${user?.email}`)
              .then((res) => {
                setbutton(true);

                console.log("post udated");
              })
              .catch((error) => {
                console.log("error on post");
              });

            toast.success("Your post created");

            seterror("");

            event.target.reset();
          } else {
            toast.error("your post created failed");
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setbutton(true);
    }
  };

  return (
    <div className="mt-16">
      <section class=" bg-color text-black">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-semibold text-black">
            Create Your post
          </h2>
          <ToastContainer />

          <form onSubmit={createPost_button}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label for="name" class="block mb-2 text-sm font-medium">
                  Post Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Name"
                  required=""
                />
              </div>

              <div>
                <label for="category" class="block mb-2 text-sm font-medium ">
                  Title
                </label>
                <input
                  type="text"
                  name="Title"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Title"
                  required=""
                />
              </div>

              <div>
                <label for="category" class="block mb-2 text-sm font-medium">
                  Category
                </label>

                <select
                  id="category"
                  name="Category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  
                  <option value="Politics">Politics</option>
                  <option value="Movi">Movie</option>
                  <option value="News">News</option>
                  <option value="Latest tools">Latest tools</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              {/* file */}

              {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
              <div className="border border-white/15 ">
                <input
                  type="file"
                  name="image"
                  className="file-input file-input-bordered w-full max-w-xs "
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium "
                >
                  Message
                </label>
                <textarea
                  id="description"
                  name="Message"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your Message here"
                ></textarea>
              </div>
              {error && <span className="text-red-500">{error}</span>}
            </div>

            <div className="w-full  border-white flex justify-center">
              <button
                type="submit"
                className="btn px-10 mt-5 py-2 bg-blue-500 text-white shadow-2xl

                hover:shadow-2xs
                hover:shadow-indigo-500
                
                
                "
              >
                {button ? "Submit" : "Loading.."}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreatePost;
