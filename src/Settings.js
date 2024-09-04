import React from "react";

const Settings = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="bg-white shadow rounded-lg p-4">
                <div className="mb-4">
                    <h3 className="font-semibold mb-2">
                        Notification Preferences
                    </h3>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id="email-notifications"
                            className="mr-2"
                        />
                        <label htmlFor="email-notifications">
                            Receive email notifications
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="sms-notifications"
                            className="mr-2"
                        />
                        <label htmlFor="sms-notifications">
                            Receive SMS notifications
                        </label>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Account Settings</h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Change Password
                    </button>
                </div>
            </div>
        </>
    );
};

export default Settings;
