import React from "react";
import recordedBannerBG from "../../../assets/backgr-1.png";
import cloudShape from "../../../assets/shape_11_1-1.webp";
import randomImage from "../../../assets/Salesforce-CDP-Videos.jpeg";

const faqs = [
    {
        question: "What are the benefits of self-paced over live online classes?",
    },
    {
        question: "What are the benefits of live online training over self-paced?",
    },
    {
        question: "Is it possible to switch from self-paced training to Instructor-led training?",
    },
    {
        question: "Do you have more queries on Salesforce Commerce Cloud self-paced videos?",
    },
];
const videoData = [
    { title: "Salesforce CDP", price: "₹30,800.00", originalPrice: "₹50,000.00" },
    { title: "Salesforce Development", price: "₹12,500.00", originalPrice: "₹25,000.00" },
    { title: "Salesforce Revenue Cloud", price: "₹15,800.00", originalPrice: "₹30,000.00" },
    { title: "Salesforce Billing", price: "₹7,500.00", originalPrice: "₹15,000.00" },
    { title: "Salesforce CPQ", price: "₹12,800.00", originalPrice: "₹20,000.00" },
    { title: "Salesforce Admin", price: "₹7,500.00", originalPrice: "₹15,000.00" },
];

const RecordedVideo = () => {
    return (
        <>
            <div
                className="w-[107rem] h-[24rem] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${recordedBannerBG})` }}
            >
                <div className="flex flex-col justify-center items-center h-[19rem] text-white text-[2.5rem]">
                    <p className="text-sm">
                        Home &nbsp;&nbsp;&gt;&nbsp;&nbsp; Recorded videos
                    </p>
                    <p className="border-b-2 border-[#e27c1e]">Recorded Videos</p>
                </div>
                <div className="absolute bottom-0">
                    <img className="w-[107rem]" src={cloudShape} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-center min-h-screen mt-10 w-[107rem]">
                <div className="flex flex-wrap justify-center items-center gap-9 max-w-7xl mx-auto">
                    {videoData.map((video, index) => (
                        <div
                            key={index}
                            className="border p-4 rounded-lg shadow-lg text-center flex flex-col items-center w-[30%] mb-8"
                        >
                            <img
                                src={randomImage}
                                alt={video.title}
                                className="w-full h-50 object-cover mb-4"
                            />
                            <h2 className="text-2xl font-bold">{video.title}</h2>
                            <p className="text-gray-500 line-through">{video.originalPrice}</p>
                            <p className="text-xl text-green-500">{video.price}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* faq section  */}
            <div className="bg-[#f5f7fa] py-16 px-8 ">
                <div className="max-w-7xl mx-auto w-[111%]">
                    <h2 className="text-[#e27c1e] font-bold text-lg mb-4">Have Any Questions?</h2>
                    <h3 className="text-2xl font-semibold mb-8">FAQs</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center border-b border-gray-300 py-3 cursor-pointer"
                            >
                                <p className="text-lg text-gray-900 font-medium">{faq.question}</p>
                                {/* <span className="text-blue-500 text-xl">+</span> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecordedVideo;