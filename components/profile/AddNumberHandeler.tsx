"use client";

import { useState } from "react";

function AddNumberHandler() {
  const [showInput, setShowInput] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (userPhoneNumber.length !== 11) {
      setError("شماره شما معتبر نمیباشد");
    } else if (!userPhoneNumber.startsWith("091")) {
      setError("شماره شما معتبر نمیباشد");
    } else {
      setIsSaved(true);
      setShowInput(false);
      setError("");
    }
  };

  const handleEdit = () => {
    setIsSaved(false);
    setShowInput(true);
  };

  return (
    <div className="phone-number-container">
      {isSaved ? (
        <div className="saved-number">
          <span>{userPhoneNumber}</span>
          <button onClick={handleEdit} className="btn text-blue-500 ml-2">
            ویرایش
          </button>
        </div>
      ) : showInput ? (
        <div className="input-container">
          <input
            type="number"
            placeholder="شماره خود را وارد کنید"
            value={userPhoneNumber}
            className="input border-none outline-none focus:outline-none w-50 dark:bg-gray-200"
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="btn bg-green-500 text-gray-800 ml-2 dark:border-none shadow-xl"
          >
            ذخیره
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setShowInput(true);
            setError("");
          }}
          className="btn shadow"
        >
          اضافه کردن شماره
        </button>
      )}
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
}

export default AddNumberHandler;
