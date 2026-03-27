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
            matchPackagePrefixes: ["io.quarkus"],
            groupName: "quarkus",
            groupSlug: "quarkus_{{currentVersion}}_{{newVersion}}"
        }
    ],
    baseBranches: [
        "feature/base-auto-update"
    ],
    recreateWhen: "always"
};