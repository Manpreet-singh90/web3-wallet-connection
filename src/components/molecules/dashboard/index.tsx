"use client"
import React, { memo, useEffect, useState } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const [walletAddress, setWalletAddress] = useState('')

    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != 'undefined') {
            try {
                /** 
                 * Meta Mask is installed
                 */
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log(" ############# Block 11111111111", accounts);
                setWalletAddress(accounts[0])
            } catch (error) {
                console.log(" ################ connectWallet Error 11111 ", error)
            }
        } else {
            /**
             * Meta Mask is not installed
             */
            console.log(" ############# connectWallet else Block 11111111111 Meta Mask Not Installed",);
        }
    }

    const getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: "eth_account" });
                if (accounts) {
                    setWalletAddress(accounts[0])
                } else {
                    console.log(" Connect to Meta Mask  using the connect button")
                }
            } catch (error) {
                console.log(" ################ connectWallet Error 11111 ", error)
            }
        } else {
            /**
             * Meta Mask is not installed
             */
            console.log(" ############# getCurrentWalletConnected else Block 11111111111 Meta Mask Not Installed",);
        }
    }

    useEffect(() => {
        getCurrentWalletConnected()
    })

    return (
        <section>

            <div className="bg-black text-white py-20 h-full">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Web3 Wallet</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Connect : Meta Mask Connection
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                            register now to showcase your talent and win exciting prizes.</p>
                        {!walletAddress && <button className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent" onClick={() => connectWallet()}>
                            Connect Now
                        </button>}
                        {walletAddress && <button className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Connected:  {walletAddress.length && walletAddress.substring(0, 6) + "..." + walletAddress.substring(38)}
                        </button>}
                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div>
                                <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
                            <div>
                                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" /></div>
                            <div>
                                <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Dashboard)