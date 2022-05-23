/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/cart/[cart]": { page: "/cart/[cart]" },
      "/privacyandpolicy": { page: "/privacyandpolicy" },
      "/product/[product]": { page: "/product/[product]" },
      "/store/[search]": { page: "/store/[search]" },
      "/user/auth/login": { page: "/user/auth/login" },
      "/user/account/myaccount/profile": {
        page: "/user/account/myaccount/profile",
      },
      "/user/account/myaccount/signout": {
        page: "/user/account/myaccount/signout",
      },
      "/user/account/mypurchases/purchases": {
        page: "/user/account/mypurchases/purchases",
      },
      "/user/account/mypurchases/cancels": {
        page: "/user/account/mypurchases/cancels",
      },
    };
  },

  env: {
    API: "24e3fa79c3d9ef3de668bd674f99bc15",
    CAPTCHA: "6LeDQQAgAAAAAGuL_82TcLPK4SH060Sc3irl3nm5",
  },
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
