import { cropPrices } from "@/data/yieldChartData";

export function formatToIDR(amount) {
  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}

function calculatePriceAndPercentage(prices) {
  const today = new Date();
  const currentMonthIndex = today.getMonth(); // Ambil indeks bulan sekarang (0 = Januari)
  const currentMonthPrice = prices[currentMonthIndex]; // Harga bulan sekarang

  // Year Price is based on December price (month 11)
  const yearPrice = prices[11]; // Harga bulan Desember

  // Quarter Price: Ambil harga 3 bulan yang akan datang
  let quarterPrice;
  if (currentMonthIndex === 11) {
    // Jika bulan Desember, ambil Januari, Februari, Maret
    quarterPrice =
      prices.slice(0, 3).reduce((sum, price) => sum + price, 0) / 3;
  } else {
    // Jika bukan Desember, ambil harga 3 bulan berikutnya
    quarterPrice =
      prices
        .slice(currentMonthIndex + 1, currentMonthIndex + 4)
        .reduce((sum, price) => sum + price, 0) / 3;
  }

  // Menghitung persentase perubahan berdasarkan harga bulan sekarang
  const monthPercentage =
    ((currentMonthPrice - prices[0]) / prices[0]) * 100 || 0; // Perubahan bulan saat ini dibandingkan bulan pertama (Januari)
  const quarterPercentage = ((quarterPrice - prices[0]) / prices[0]) * 100 || 0; // Perubahan rata-rata kuartal dibandingkan bulan pertama (Januari)
  const yearPercentage = ((yearPrice - prices[0]) / prices[0]) * 100 || 0; // Perubahan harga Desember dibandingkan bulan pertama (Januari)

  return {
    month: {
      price: currentMonthPrice,
      percentage: monthPercentage.toFixed(2),
    },
    quarter: {
      price: quarterPrice,
      percentage: quarterPercentage.toFixed(2),
    },
    year: {
      price: yearPrice,
      percentage: yearPercentage.toFixed(2),
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget magna at elit tempor porta id a tellus. In hac habitasse platea dictumst. Maecenas blandit maximus nunc, ac accumsan ex.",
  };
}

export const cropData = {
  Wheat: calculatePriceAndPercentage(cropPrices.Wheat),
  Soybean: calculatePriceAndPercentage(cropPrices.Soybean),
  Corn: calculatePriceAndPercentage(cropPrices.Corn),
  Rice: calculatePriceAndPercentage(cropPrices.Rice),
};

