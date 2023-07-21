import React, { useState, useRef } from 'react';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import mommy from '../../assets/icon/parent.svg';

const ProfilePicture = () => {
    // const [selectedFile, setSelectedFile] = useState(null);
    // const [isHovered, setIsHovered] = useState(false);
    // const fileInputRef = useRef(null);

    // const handleEditClick = () => {
    //     fileInputRef.current.click();
    // };

    // const handleFileChange = event => {
    //     const file = event.target.files[0];
    //     setSelectedFile(file);
    // };

    return (
        <div className="w-[96px] h-[96px] flex justify-center items-center">
            <img src={mommy} className="w-full h-full" alt="" />
            {/* <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            /> */}
        </div>
    );
};

export default ProfilePicture;
