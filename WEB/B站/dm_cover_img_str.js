B = function (t) {
    var e = (new TextEncoder).encode(t).buffer
        , n = new Uint8Array(e)
        , r = btoa(String.fromCharCode.apply(null, n));
    return r.substring(0, r.length - 2)
}

// var webglVendorAndRenderer = 'ANGLE (Intel, Intel(R) UHD Graphics 630 (0x00009BC8) Direct3D11 vs_5_0 ps_5_0, D3D11)Google Inc. (Intel)'
var webglVendorAndRenderer = 'ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)Google Inc. (Google)'


console.log(B(webglVendorAndRenderer));

// 已完成
