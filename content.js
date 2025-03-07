(function() {
    // Function to check if the current NetSuite account is production
    function isProductionAccount() {
        const hostname = window.location.hostname;
        return !hostname.includes("sb") && !hostname.includes("tstdrv") && !hostname.includes("td") && !hostname.includes("system") && !hostname.includes("nlcorp") ;
    }

    if (isProductionAccount()) {
        alert("⚠️ You are logging into a PRODUCTION NetSuite account! Be careful with any changes.");
    }
})();
