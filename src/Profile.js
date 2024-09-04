import React from "react";
import { User } from "lucide-react";

const Profile = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <div className="flex items-center mb-4">
                    <User size={64} className="mr-4" />
                    <div>
                        <h3 className="font-semibold text-lg">Kyle DENIS</h3>
                        <p>Person ID: 12345678</p>
                        <p>FFA Number: 12345678</p>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="font-semibold">Contact Information</h4>
                    <p>Email: contact@kyleden.is</p>
                    <p>Phone: (+61) 418 123 456</p>
                </div>
                <div>
                    <h4 className="font-semibold">Qualifications</h4>
                    <ul className="list-disc list-inside">
                        <li>FIFA Referee</li>
                        <li>First Aid Certified</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;
