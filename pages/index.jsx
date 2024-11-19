import TrollTelephoneNumberSelector from "../components/Troll/TrollTelephoneNumberSelector";
import TrollVolume from "../components/Troll/TrollVolume";
import Volume from "../components/Normal/Volume";
import TelephoneNumberSelector from "../components/Normal/TelephoneNumberSelector";

export default function index() {

    return (


        <>
            <div className="flex flex-auto">
                <div>
                    <TrollVolume />
                    <Volume />
                </div>
            </div>

            <div className="flex flex-auto">
                <div className="flex flex-col items-center space-y-4 p-4">
                    <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DON'T</h1>
                    <div className="flex flex-row gap-1">
                        <TrollTelephoneNumberSelector wantedDigits={2} hasPlus={true} />
                        <TrollTelephoneNumberSelector wantedDigits={3} />
                        <TrollTelephoneNumberSelector wantedDigits={3} />
                        <TrollTelephoneNumberSelector wantedDigits={4} />
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-4 p-4">
                    <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">DO</h1>

                    <TelephoneNumberSelector />
                </div>
            </div>
        </>

    )
}