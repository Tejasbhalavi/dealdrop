"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

const AddProductFrom = ({ user }) => {
  const [url, seturl] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {};

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            placeholder="Enter product URL"
            className="h-12 text-base"
            required
            disabled={loading}
          />
          <Button
            className="bg-orange-500 hover:bg-orange-600 h-10 sm:h-12 px-8"
            type="submit"
            disabled={loading}
            size={"lg"}
          >
            {loading ? (
              <>
                <Loader2 className=" w-4 h-4 mr-2 animate-spin" />
                Adding...
              </>
            ) : (
              "Add Product"
            )}
          </Button>
        </div>
      </form>

      {/* Auth modal */}
    </>
  );
};

export default AddProductFrom;
