import { useMemo } from "react";

export const useCryptoEarnings = ({ volume24h, userHoldings, rewardPercentage, solPrice }) => {
    return useMemo(() => {
        if (!volume24h || !userHoldings || !rewardPercentage || !solPrice) {
            return { dailyPool: 0, dailyEarningsUSD: 0, dailyEarningsSOL: 0, monthlyEarningsUSD: 0, monthlyEarningsSOL: 0 };
        }

        // Günlük ödül havuzu
        const dailyPool = (volume24h * rewardPercentage) / 100;

        // Kullanıcının günlük kazancı
        const dailyEarningsUSD = dailyPool / 1000; // Sabit katsayı ile hesaplama
        const dailyEarningsSOL = dailyEarningsUSD / solPrice;

        // Aylık kazanç
        const monthlyEarningsUSD = dailyEarningsUSD * 30;
        const monthlyEarningsSOL = dailyEarningsSOL * 30;

        return { dailyPool, dailyEarningsUSD, dailyEarningsSOL, monthlyEarningsUSD, monthlyEarningsSOL };
    }, [volume24h, userHoldings, rewardPercentage, solPrice]);
};

export const calculatePercentage = (part, total) => {
    if (total === 0) return 0;
    return (part / total) * 100;
};
