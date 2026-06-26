import Section from './ui/Section'
import Heading from './ui/Heading'

export default function DeploymentEvidence() {
  const deployments = [
    {
      name: 'Vasuki OS',
      status: 'Production',
      deployment: 'AWS EC2 + RDS + ElastiCache',
      metrics: '12M+ ops/month',
      uptime: '99.7%',
    },
    {
      name: 'Janani AI',
      status: 'Production',
      deployment: 'Docker + Kubernetes',
      metrics: '8,400 signals/month',
      uptime: '99.4%',
    },
    {
      name: 'ML Trading Engine',
      status: 'Live',
      deployment: 'AWS Lambda + Step Functions',
      metrics: '87ms latency',
      uptime: '99.8%',
    },
  ]

  return (
    <Section id="deployment" tone="base">
      <Heading
        eyebrow="Deployment Evidence"
        title="Live systems at scale"
        description="Not concepts or demos. These are production systems handling real traffic and real decisions."
      />

      <div className="mt-12 space-y-4">
        {deployments.map((deployment) => (
          <div
            key={deployment.name}
            className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{deployment.name}</h3>
                  <span className="inline-flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-pulse" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-xs font-medium text-green-700 dark:text-green-400">
                      {deployment.status}
                    </span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{deployment.deployment}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:text-right">
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400">Throughput</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{deployment.metrics}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400">Uptime</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{deployment.uptime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
