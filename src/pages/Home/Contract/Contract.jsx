export default function Contract() {
  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-3">We’re Here to Help You</h1>
        <p>
          We always want to hear from you! Let us know how we can best help you
          and we'll do our very best.
        </p>
      </div>
      <form>
        <div className="md:flex justify-center mt-6 gap-x-8 md:mx-52 px-2">
          <div className="w-full md:w-[50%]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md  w-full"
              />
            </div>
          </div>
          <div className="w-ful md:w-[50%]">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-md  w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:mx-52 px-2 mt-6">
          <textarea
            className="border w-full p-4"
            placeholder="Type here"
            name="description"
            id=""
            cols="5"
            rows="5"
          ></textarea>
        </div>
        <div className="flex justify-center mt-10">
          <input
            type="submit"
            value="Submit"
            className="bg-green-500 text-white rounded px-4 py-3 w-full mx-52"
          />
        </div>
      </form>
    </div>
  );
}
