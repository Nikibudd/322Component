import TrollTelephoneNumberSelector from "../components/Troll/TrollTelephoneNumberSelector";
import TrollVolume from "../components/Troll/TrollVolume";
import Volume from "../components/Normal/Volume";
import TelephoneNumberSelector from "../components/Normal/TelephoneNumberSelector";

export default function index() {

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <div className="flex flex-row max-w-4xl ml-32 pt-8 gap-40 ">
                <div className="flex flex-auto justify-center">
                    <div className="bg-gray-900/50 rounded-xl pt-6 pr-6 pb-6 space-y-8">
                        <div>
                            <TrollVolume />
                        </div>
                        <div>
                            <Volume />
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="bg-gray-900/50 rounded-xl p-7">
                        <div className="flex flex-col space-y-8">
                            <div className="flex flex-col items-center">
                                <h1 className="mb-4 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DON'T</h1>
                                <div className="flex flex-row gap-1">
                                    <TrollTelephoneNumberSelector wantedDigits={2} hasPlus={true} />
                                    <TrollTelephoneNumberSelector wantedDigits={3} />
                                    <TrollTelephoneNumberSelector wantedDigits={3} />
                                    <TrollTelephoneNumberSelector wantedDigits={4} />
                                </div>
                            </div>

                            <div className="flex flex-col items-center">
                                <h1 className="mb-4 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DO</h1>
                                <TelephoneNumberSelector />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}