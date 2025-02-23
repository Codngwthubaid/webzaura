import { Gravity, MatterBody } from "@/components/ui/gravity";

export default function BottomGravity() {
    return (
        <div className="w-full min-h-[400px] sm:min-h-[300px] flex flex-col relative font-azeretMono">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="30%"
                    y="10%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c] text-white rounded-full hover:cursor-pointer px-8 py-4">
                        Web Development
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="30%"
                    y="30%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c] text-white rounded-full hover:cursor-grab px-8 py-4 ">
                        Digital Marketing
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="40%"
                    y="20%"
                    angle={10}
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
                        Social Media Marketing
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="75%"
                    y="10%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                        UI/UX
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="80%"
                    y="20%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                        Graphic Designing
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="50%"
                    y="10%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                        AI Chatbot
                    </div>
                </MatterBody>
                <MatterBody
                    matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                    x="50%"
                    y="10%"
                >
                    <div className="text-base sm:text-2xl md:text-3xl bg-[#e9590c]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
                        App Development
                    </div>
                </MatterBody>
            </Gravity>
        </div>
    );
}

