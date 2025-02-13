import React, { useState } from "react";
import useAuthMangedHook from "../hook/useAuthMangedHook";
import { useaxiosPublic } from "../Api/usePublicHook";
import { ToastContainer,toast } from "react-toastify";





function CreatePost() {

  /// trending post
  // show top liked post 
  


  // title
  // photo
  // name
  // message
  // time
  // post email
  // add like Option int 0


  // serach name
  // serach category

  // use name , email
  const { user, loading } = useAuthMangedHook();
  // my post find by email

  // catch error
  const [error  , seterror] = useState('');
  /// add details page add like here
  // but also show first page 

  /// max post 100 length word 

  const createPost_button = (event) => {


    try {
      event.preventDefault();

      const data = new FormData(event.target);
      const data_form = Object.fromEntries(data);
      console.log(data_form);
      const { name, Title, Message, Category } = data_form;

      if( name.length<=4 )
      {
        seterror("Post name must be 5 length");
        return;
      }
      if( (Title.length<=8) )
      {
        seterror("Title name must be 8 length upper");
        return;
      }
      if(  Message.length<=20)
      {
        seterror("Message must be 20 length upper");
        return;
      }


      const postUser = {
        PostName: name,
        Title: Title,
        Message: Message,
        Category: Category,
        Email:user?.email,
        Like: 0,
      };
      console.log(postUser);

      useaxiosPublic
        .post("/create-post", postUser)
        .then((result) => {
          if(result.status==200)
          {
            toast.success("Your post created")
            

          }else{
            toast.error("your post created failed",)
          }

        })
        .catch((error) => {
          console.log(error.message)
        });

    } catch (error) {
      console.log(error);
    }
  };

  return ( 
    <div className="mt-16">

      <section class=" bg-color text-black">

        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">

          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Create Your post
          </h2>
          <ToastContainer/>

          <form onSubmit={createPost_button}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
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
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="Category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
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
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
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
                className="btn mt-6 flex justify-center items-center px-12 py-4 bg-green-600 border-white/10 shadow hover:shadow-2xl hover:shadow-amber-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreatePost;
