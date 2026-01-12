module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/mega-backend",
        "Gepardec/mega-renovate",
        "Gepardec/auto-update-tech"
    ],
    prHourlyLimit: 0,
    prConcurrentLimit: 0,
    separateMajorMinor: false,
    packageRules: [
        {
            matchRepositories: [
                "Gepardec/mega-renovate",
                "Gepardec/auto-update-tech"
            ],
            baseBranches: ["main"]
        },
        {
            matchRepositories: ["Gepardec/mega-backend"],
            baseBranches: ["feature/base-auto-update"]
        },
        {
            matchPackageNames: ["io.quarkus{/,}**"],
            groupName: "quarkus",
            groupSlug: "quarkus_{{currentVersion}}_{{newVersion}}"
        }
    ],
    recreateWhen: "always"
};