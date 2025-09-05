module.exports = {
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    platform: 'github',
    repositories: [
        "Gepardec/mega-backend"
    ],
    prHourlyLimit: 0,
    prConcurrentLimit: 0,
    separateMajorMinor: false,
    packageRules: [
        {
            matchPackageNames: ["io.quarkus{/,}**"],
            groupName: "quarkus",
            groupSlug: "quarkus_{{currentVersion}}_{{newVersion}}"
        }
    ],
    recreateWhen: "always",
    baseBranches: [
        "feature/base-auto-update"
    ],
};