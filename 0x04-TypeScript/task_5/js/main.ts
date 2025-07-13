// Unique branding using a tag (nominal typing trick)
interface MajorCredits {
    credits: number;
    readonly __brand: "major";
}

interface MinorCredits {
    credits: number;
    readonly __brand: "minor";
}

function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "major"
    };
}

function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: "minor"
    };
}
