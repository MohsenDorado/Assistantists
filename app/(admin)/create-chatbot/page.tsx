import Avatar from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function CreateChatbot() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 bg-white p-10 rounded-md m-10">
      <Avatar seed="create-chatbot" />
      <div>
        <h1 className="text-xl lg:text-3xl font-semibold ">Create and Train</h1>
        <h2 className="font-light">
          The chatbot to serve not only yourself, but the world!
        </h2>
        <form className="flex flex-col md:flex-row gap-3 mt-5 ">
          <Input
            placeholder="Chatbot Name..."
            className="max-w-lg "
            type="text"
            required
          />
          <Button>Create</Button>{" "}
        </form>
      </div>
    </div>
  );
}

export default CreateChatbot;
