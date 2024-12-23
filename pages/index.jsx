import TrollTelephoneNumberSelector from "../components/Troll/TrollTelephoneNumberSelector";
import TrollVolume from "../components/Troll/TrollVolume";
import Volume from "../components/Normal/Volume";
import TelephoneNumberSelector from "../components/Normal/TelephoneNumberSelector";
import TrollBirthDaySelector from "../components/Troll/TrollBirthDaySelector";
import YearSelector from "../components/Normal/YearSelector";

export default function Index() {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-gray-900/50 rounded-xl p-6 shadow-lg">
                        <div className="space-y-8">
                            <div className="w-full">
                                <TrollVolume />
                            </div>
                            <div className="w-full">
                                <Volume />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-6 shadow-lg">
                        <div className="space-y-8">
                            <div className="w-full">
                                <TrollBirthDaySelector />
                            </div>
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                    DO
                                </h2>
                                <div className="flex justify-center">
                                    <YearSelector />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-6 shadow-lg">
                    <div className="space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                DON'T
                            </h2>
                            <div className="flex flex-wrap justify-center gap-1">
                                <TrollTelephoneNumberSelector wantedDigits={2} hasPlus={true} />
                                <TrollTelephoneNumberSelector wantedDigits={3} />
                                <TrollTelephoneNumberSelector wantedDigits={3} />
                                <TrollTelephoneNumberSelector wantedDigits={4} />
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                DO
                            </h2>
                            <div className="flex justify-center">
                                <TelephoneNumberSelector />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}