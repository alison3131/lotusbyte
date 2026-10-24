import type { NextConfig } from "next";

const editorHydrationGuard = `(function(){
  var nativeSet = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value){
    if (name === "data-cursor-ref") return;
    return nativeSet.call(this, name, value);
  };
  var nativeError = console.error;
  console.error = function(){
    try {
      var text = "";
      for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        text += typeof value === "string" ? value : String(value);
      }
      if (text.indexOf("didn't match the client properties") !== -1 && document.querySelector("[data-cursor-ref]")) return;
    } catch (e) {}
    return nativeError.apply(console, arguments);
  };
  function strip(node){
    if (!node || node.nodeType !== 1) return;
    if (node.hasAttribute("data-cursor-ref")) node.removeAttribute("data-cursor-ref");
    var found = node.querySelectorAll("[data-cursor-ref]");
    for (var i = 0; i < found.length; i++) found[i].removeAttribute("data-cursor-ref");
  }
  var observer = new MutationObserver(function(mutations){
    for (var i = 0; i < mutations.length; i++) {
      var mutation = mutations[i];
      if (mutation.type === "attributes") strip(mutation.target);
      else if (mutation.addedNodes) {
        for (var j = 0; j < mutation.addedNodes.length; j++) strip(mutation.addedNodes[j]);
      }
    }
  });
  if (document.documentElement) {
    observer.observe(document.documentElement, { attributes: true, subtree: true, childList: true, attributeFilter: ["data-cursor-ref"] });
    strip(document.documentElement);
  }
  window.addEventListener("load", function(){
    observer.disconnect();
    Element.prototype.setAttribute = nativeSet;
    console.error = nativeError;
  });
})();`;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer, webpack }) => {
    if (dev && !isServer) {
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: editorHydrationGuard,
          raw: true,
          entryOnly: true,
        }),
      );
    }
    return config;
  },
  serverExternalPackages: ["firebase-admin", "@google-cloud/firestore", "google-auth-library", "google-gax"],
  experimental: {
    serverActions: {
      bodySizeLimit: "12mb",
    },
  },
  async redirects() {
    return [{ source: "/drops", destination: "/work", permanent: true }];
  },
};

export default nextConfig;
