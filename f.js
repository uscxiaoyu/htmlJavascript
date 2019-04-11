function isRun(x) {
    if (x % 100 == 0) {
        if ( x % 400 == 0) {
            return true;
        } else {
            return false;
        };
    } else if (x % 4 == 0) {
        return true;
    } else {
        return false;
    };
};