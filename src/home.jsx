import React, { useEffect, useState } from "react";
import "./home.css";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { FlotiongText, JoggingText } from "./components/text.animation";
import { Button1, Button6, Signal } from "./components/button.components";
import { FaTelegramPlane, FaChartArea, FaCode } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuGitBranchPlus } from "react-icons/lu";
import { getCryptoPrices } from "./context/fetch.service";
import { useCryptoEarnings, calculatePercentage } from "./context/calc.service";

export const App = () => {
  const [price, setPrice] = useState(0);
  const [volume24h, setVolume24h] = useState(100000);
  const [userHoldings, setUserHoldings] = useState(1000000);
  const {
    dailyPool,
    dailyEarningsUSD,
    dailyEarningsSOL,
    monthlyEarningsUSD,
    monthlyEarningsSOL,
  } = useCryptoEarnings({
    volume24h: volume24h,
    userHoldings: userHoldings,
    rewardPercentage: 5,
    solPrice: price,
  });

  console.log(
    dailyPool,
    dailyEarningsUSD,
    dailyEarningsSOL,
    monthlyEarningsUSD,
    monthlyEarningsSOL
  );

  useEffect(() => {
    const list = "solana";
    getCryptoPrices(list).then((data) => {
      setPrice(data.solana.usd);
    });
  }, []);

  useEffect(() => {
    Splitting();
  }, []);

  const getVolume24h = (value) => {
    if (value < 0) {
      setVolume24h(0);
    } else {
      setVolume24h(value);
    }
  };

  const getHoldings = (value) => {
    if (value < 0) {
      setUserHoldings(0);
    } else {
      setUserHoldings(value);
    }
  };

  return (
    <div className="wrapper">
      <div className="_site-info">
        <h1
          className="navbar__title"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <FlotiongText text="$QC" />
        </h1>
        <FlotiongText
          text="QUANTUM CASH"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-offset="0"
        />
        <div
          className="_title"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="200"
          data-aos-offset="0"
        >
          <p>
            $QC is a Solana token that rewards holders with automatic Solana
            every 5 minutes.
          </p>
        </div>

        <div className="link">
          <Button6
            text="BUY"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="100"
            data-aos-offset="0"
            onclick={() =>
              window.open(
                "https://phantom.com/learn/crypto-101/what-is-a-crypto-wallet",
                "_blank"
              )
            }
          />
          <Button6
            icon={<FaChartArea />}
            text="Chart"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-offset="0"
            onclick={() =>
              window.open(
                "https://dexscreener.com/solana/znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh",
                "_blank"
              )
            }
          />
          <Button6
            icon={<BsTwitterX />}
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-offset="0"
          />
          <Button6
            icon={<FaTelegramPlane />}
            text="Telegram"
            data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="400"
            data-aos-offset="0"
          />
        </div>
      </div>

      <div className="rewards" data-aos="fade-up" data-aos-duration="700">
        <div
          className="rewards_title"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="_header">
            <FlotiongText
              text="Automatic Soloana rewards"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            />
            <div className="_title" data-aos="fade-up" data-aos-duration="700">
              <Signal />
              <p>
                Every 5 minutes, holders receive Solana rewards automatically
                distributed to their wallets _
              </p>
            </div>
          </div>
          <div
            className="system-info"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="_title">
              <Signal />
              <p>SYSTEM.INFO</p>
            </div>
            <p>
              The $QC token uses a revolutionary reward system that
              automatically distributes Solana to all holders every 5 minutes,
              with no need to claim.
            </p>
          </div>
        </div>

        <div
          className="tree-container half"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="_title" data-aos="fade-up" data-aos-duration="700">
            <Signal />
            <p>[HOW.IT.WORKS]</p>
          </div>

          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <p>5% tax is collected from every buy and sell transaction</p>
            <span className="box-bg">
              <FaCode />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <p>Tax is automatically converted to Solana</p>
            <span className="box-bg">
              <FaCode />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <p>
              Smart contract distributes Solana to all holders every 5 minutes
            </p>
            <span className="box-bg">
              <FaCode />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <p>Rewards are proportional to your token holdings</p>
            <span className="box-bg">
              <FaCode />
            </span>
          </div>
        </div>
        <div
          className="tree-container half"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="_title">
            <Signal />
            <p>[BENEFITS]</p>
          </div>

          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <p>Earn passive income in Solana just by holding</p>
            <span className="box-bg">
              <LuGitBranchPlus />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <p>No need to claim - rewards are automatic</p>
            <span className="box-bg">
              <LuGitBranchPlus />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
            data-aos-offset="0"
          >
            <p>Frequent 5-minute distribution cycles</p>
            <span className="box-bg">
              <LuGitBranchPlus />
            </span>
          </div>
          <div
            className="box"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <p>Higher trading volume means more rewards</p>
            <span className="box-bg">
              <LuGitBranchPlus />
            </span>
          </div>
        </div>
        <div
          className="tree-container"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="_title" data-aos="fade-up" data-aos-duration="700">
            <Signal />
            <p>[REWARD.CALCULATOR]</p>
          </div>

          <div className="input-box">
            <div
              className="input-label"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              <span>24h Volume (USD)</span>
              <label>
                <span>$</span>
                <input
                  type="number"
                  value={volume24h}
                  onChange={(e) => getVolume24h(e.target.value)}
                />
                <small>USD</small>
              </label>
              <label>
                <span>0 $</span>
                <span>1 mln$</span>
                <div>
                  <i
                    style={{
                      width: `${calculatePercentage(volume24h, 1000000)}%`,
                    }}
                  ></i>
                </div>
              </label>
            </div>
            <div
              className="input-label"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <span>Your $IMG Holdings</span>
              <label>
                <span>$QC</span>
                <input
                  type="number"
                  value={userHoldings}
                  onChange={(e) => getHoldings(e.target.value)}
                />
              </label>
              <label>
                <span>0 </span>
                <span>1 bln(max)</span>
                <div>
                  <i
                    style={{
                      width: `${calculatePercentage(
                        userHoldings,
                        1000000000
                      )}%`,
                    }}
                  ></i>
                </div>
              </label>
            </div>
            <div className="result" data-aos="fade-up" data-aos-duration="700">
              <div className="result-item">
                <span>Daily Rewards Pool</span>
                <span>${dailyPool}</span>
              </div>
              <div className="result-item">
                <span>Your Daily Earnings</span>
                <span>
                  ${dailyEarningsUSD} <br /> {dailyEarningsSOL.toFixed(5)} SOL
                </span>
              </div>
              <div className="result-item">
                <span>Monthly Projection</span>
                <span>
                  ${monthlyEarningsUSD} <br /> {monthlyEarningsSOL.toFixed(5)}{" "}
                  SOL
                </span>
              </div>
            </div>
            <div className="note" data-aos="fade-up" data-aos-duration="700">
              <Signal />
              <p>
                * Calculations based on current trading volume and token
                holdings
              </p>
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards" data-aos="fade-up" data-aos-duration="700">
        <div
          className="rewards_title"
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-duration="700"
          data-aos-delay="3000"
          data-aos-offset="0"
        >
          <div
            className="system-info"
            data-aos="fade-up"
            data-aos-anchor="#example-anchor"
            data-aos-duration="700"
          >
            <div className="_title">
              <Signal />
              <p>SYSTEM.SECURE</p>
            </div>
            <p>
              Contract audited and verified. No backdoors, no hidden fees, no
              team allocation. 100% community-owned and transparent.
            </p>
          </div>
          <div className="_header">
            <FlotiongText
              text="Why Choose $QC ?"
              data-aos="fade-up"
              data-aos-duration="700"
            />
            <div
              className="_title"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <Signal />
              <p>
                The $QC token offers unique features designed to reward holders
                and create a sustainable ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="tree-container">
          <div
            className="tree-body"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div
              className="tree-item"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                {">_"}
              </span>
              <h4
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                5% Tax Distribution
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                Every buy and sell transaction contributes to the reward pool
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                {"[]"}
              </span>
              <h4
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="700"
                data-aos-offset="0"
              >
                Auto-Claim System
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="800"
                data-aos-offset="0"
              >
                Rewards are automatically distributed every 5 minutes
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="900"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1000"
                data-aos-offset="0"
              >
                {"$_"}
              </span>
              <h4
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1100"
                data-aos-offset="0"
              >
                Solana Rewards
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1200"
                data-aos-offset="0"
              >
                Earn Solana just by holding $IMG tokens in your wallet
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="1300"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1400"
                data-aos-offset="0"
              >
                {"//"}
              </span>
              <h4
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1500"
                data-aos-offset="0"
              >
                Fair Launch
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="700"
                data-aos-delay="1600"
                data-aos-offset="0"
              >
                No pre-sale, no team tokens, 100% fair distribution
              </p>
            </div>
          </div>
          <div
            className="system-info-box"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div
              className="system-info"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <div className="_title">
                <Signal />
                <p>REWARD.MECHANISM</p>
              </div>
              <p>
                The $QC token uses a revolutionary reward system that
                automatically distributes Solana to all holders every 5 minutes,
                with no need to claim or stake your tokens.
              </p>
            </div>
            <div
              className="system-info"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <div className="_title">
                <Signal />
                <p>COMMUNITY.OWNED</p>
              </div>
              <p>
                $QC is 100% community-owned with no team tokens, no presale, and
                no max wallet limits. The 5% tax on transactions is
                automatically distributed as Solana rewards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rewards" data-aos="fade-up" data-aos-duration="700">
        <div
          className="rewards_title"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="_header">
            <FlotiongText
              text="Tokenomics"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-offset="0"
            />
            <div
              className="_title"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <Signal />
              <p>
                $QC token is designed with a fair distribution model and
                sustainable reward mechanism.
              </p>
            </div>
          </div>
          <div
            className="system-info"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="_title">
              <Signal />
              <p>VERIFIED.ON.SOLSCAN</p>
            </div>
            <p>
              Contract:{" "}
              <span style={{ color: "#da0e6d" }}>
                znv3FZt2HFAvzYf5LxzVyryh3mBXWuTRRng25gEZAjh
              </span>
            </p>
          </div>
        </div>
        <div className="tree-container tokenomics">
          <div
            className="system-info-box"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div
              className="system-info"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <div className="_title">
                <Signal />
                <p>SYSTEM.FAIRLAUNCH</p>
              </div>
              <JoggingText text="True Fair Launch" />
              <p>
                100% of the total supply is added to liquidity at launch, with
                no team tokens, no presale, and no max wallet limits. The $QC
                token is designed to be completely fair and community-driven.
              </p>
            </div>
            <div
              className="system-info"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-delay="400"
              data-aos-offset="0"
            >
              <div className="_title">
                <Signal />
                <p>SYSTEM.REWARDS</p>
              </div>
              <JoggingText text="Automatic Distribution" />
              <p>
                The 5% tax on transactions is automatically converted to Solana
                and distributed to all holders every 5 minutes. This creates a
                passive income stream just by holding $IMG tokens in your
                wallet.
              </p>
            </div>
          </div>
          <div
            className="tree-body"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <div
              className="tree-item"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="200"
                data-aos-offset="0"
              >
                {"[ 1B ]"}
              </span>
              <h4
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                1,000,000,000
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="400"
                data-aos-offset="0"
              >
                Total supply of $QC tokens
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="500"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="600"
                data-aos-offset="0"
              >
                {"====="}
              </span>
              <h4
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="700"
                data-aos-offset="0"
              >
                100%
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="800"
                data-aos-offset="0"
              >
                Community-owned, no team tokens, no presale
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="900"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1000"
                data-aos-offset="0"
              >
                {"< 5% >"}
              </span>
              <h4
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1100"
                data-aos-offset="0"
              >
                5%
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1200"
                data-aos-offset="0"
              >
                Tax on transactions, automatically converted to Solana rewards
              </p>
            </div>
            <div
              className="tree-item"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-delay="1300"
              data-aos-offset="0"
            >
              <Signal />
              <span
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1400"
                data-aos-offset="0"
              >
                {">>100<<"}
              </span>
              <h4
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1500"
                data-aos-offset="0"
              >
                100%
              </h4>
              <p
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1600"
                data-aos-offset="0"
              >
                Liquidity locked for 100 years
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>© 2021 Quantum Cash | $QC token</p>
      </div>
    </div>
  );
};
