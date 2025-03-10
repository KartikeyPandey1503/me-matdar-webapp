import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const BlockNumber = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [blockedNumbers, setBlockedNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState("");

  // Mock function to simulate fetching blocked numbers (Replace with actual API)
  useEffect(() => {
    const fetchBlockedNumbers = async () => {
      const mockBlockedNumbers = [
        { id: 1, number: "+91 12345 67890", name: "Adam Qwert" },
        { id: 2, number: "+91 98765 43210", name: "John Doe" },
      ];
      setBlockedNumbers(mockBlockedNumbers);
    };

    fetchBlockedNumbers();
  }, []);

  // Function to add a new number to the blocked list
  const handleAddNumber = () => {
    if (newNumber.trim() === "") return;
    const newEntry = {
      id: blockedNumbers.length + 1,
      number: newNumber,
      name: "Unknown",
    };
    setBlockedNumbers([...blockedNumbers, newEntry]);
    setNewNumber(""); // Reset input field
  };

  // Function to remove a number from the blocked list
  const handleRemoveNumber = (id) => {
    setBlockedNumbers(blockedNumbers.filter((entry) => entry.id !== id));
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
          <Navbar closeMenu={() => setMenuOpen(false)} />
        </div>
      )}

      <div className="w-[375px] h-full bg-white shadow-md rounded-xl p-4 relative">
        <div className="flex justify-between items-center p-2 border-b">
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <h2 className="text-lg font-semibold">Blocked Numbers</h2>
          <Link onClick={() => navigate(-1)}>
            <div className="text-2xl cursor-pointer">{"<"}</div>
          </Link>
        </div>

        {/* Blocked numbers list */}
        <div className="flex flex-col pt-4 space-y-2">
          {blockedNumbers.length > 0 ? (
            blockedNumbers.map((entry) => (
              <div
                key={entry.id}
                className="p-2 border-b flex justify-between items-center"
              >
                <p>
                  {entry.number} - {entry.name}
                </p>
                <IoMdClose
                  className="text-xl text-red-500 cursor-pointer"
                  onClick={() => handleRemoveNumber(entry.id)}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blocked numbers</p>
          )}
        </div>

        {/* Add new blocked number */}
        <div className="mt-4 p-2">
          <input
            type="text"
            placeholder="Enter number to block"
            className="w-full p-2 border rounded-md"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
          <button
            className="w-full mt-2 bg-purple-500 text-white p-2 rounded-md"
            onClick={handleAddNumber}
          >
            Block Number
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockNumber;
