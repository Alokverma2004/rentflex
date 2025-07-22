import { Home, CreditCard, CheckCircle, Building } from 'lucide-react';

const HowRentFlexWorksCode = () => {
  const codeContent = `// rentflex.engine.js

async function startJourney() {
  const tenant = await findDreamHome({ needsDepositHelp: true });

  if (tenant) {
    console.log("🏡 Dream rental found!");
    await RentFlex.coverSecurityDeposit(tenant);
    await tenant.moveIn();
    await tenant.startMonthlyRepayment();
  }

  const owner = await matchOwnerToTenant(tenant);

  if (owner.acceptsTenant) {
    await owner.receiveInstantDeposit();
    console.log("💰 Owner got paid instantly");
  }
}

startJourney();`;

  const features = [
    {
      icon: CheckCircle,
      title: "Real-time deposit assistance",
      description: "Instant security deposit coverage when you need it most"
    },
    {
      icon: Home,
      title: "Zero delays in moving",
      description: "Move into your dream rental without waiting for deposit arrangements"
    },
    {
      icon: Building,
      title: "Owner gets paid upfront", 
      description: "Property owners receive their deposit instantly upon tenant acceptance"
    },
    {
      icon: CreditCard,
      title: "Tenant pays back monthly",
      description: "Flexible monthly repayment plans that fit your budget"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How RentFlex Works — Developer Edition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Code that moves mountains (and security deposits)
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features - Left Side */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-green-600 font-mono text-lg">✅</span>
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Block - Right Side */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
              {/* Code Header */}
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm"></div>
                </div>
                <span className="text-sm text-gray-300 ml-3 font-mono font-medium">rentflex.engine.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-8 bg-gray-900">
                <pre className="text-base font-mono leading-loose text-gray-100 overflow-x-auto">
                  <code className="block">
                    <span className="text-gray-500">// rentflex.engine.js</span>{'\n\n'}
                    <span className="text-purple-400">async function</span> <span className="text-yellow-300">startJourney</span><span className="text-gray-300">() {'{'}</span>
                    {'\n  '}<span className="text-purple-400">const</span> <span className="text-blue-300">tenant</span> <span className="text-purple-400">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">findDreamHome</span><span className="text-gray-300">({'{'} </span><span className="text-green-400">needsDepositHelp</span><span className="text-gray-300">:</span> <span className="text-orange-400">true</span> <span className="text-gray-300">{'}'});</span>
                    {'\n\n  '}<span className="text-purple-400">if</span> <span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">) {'{'}</span>
                    {'\n    '}<span className="text-blue-300">console</span><span className="text-gray-300">.</span><span className="text-yellow-300">log</span><span className="text-gray-300">(</span><span className="text-green-400">"🏡 Dream rental found!"</span><span className="text-gray-300">);</span>
                    {'\n    '}<span className="text-purple-400">await</span> <span className="text-blue-300">RentFlex</span><span className="text-gray-300">.</span><span className="text-yellow-300">coverSecurityDeposit</span><span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">);</span>
                    {'\n    '}<span className="text-purple-400">await</span> <span className="text-blue-300">tenant</span><span className="text-gray-300">.</span><span className="text-yellow-300">moveIn</span><span className="text-gray-300">();</span>
                    {'\n    '}<span className="text-purple-400">await</span> <span className="text-blue-300">tenant</span><span className="text-gray-300">.</span><span className="text-yellow-300">startMonthlyRepayment</span><span className="text-gray-300">();</span>
                    {'\n  '}<span className="text-gray-300">{'}'}</span>
                    {'\n\n  '}<span className="text-purple-400">const</span> <span className="text-blue-300">owner</span> <span className="text-purple-400">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">matchOwnerToTenant</span><span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">);</span>
                    {'\n\n  '}<span className="text-purple-400">if</span> <span className="text-gray-300">(</span><span className="text-blue-300">owner</span><span className="text-gray-300">.</span><span className="text-green-400">acceptsTenant</span><span className="text-gray-300">) {'{'}</span>
                    {'\n    '}<span className="text-purple-400">await</span> <span className="text-blue-300">owner</span><span className="text-gray-300">.</span><span className="text-yellow-300">receiveInstantDeposit</span><span className="text-gray-300">();</span>
                    {'\n    '}<span className="text-blue-300">console</span><span className="text-gray-300">.</span><span className="text-yellow-300">log</span><span className="text-gray-300">(</span><span className="text-green-400">"💰 Owner got paid instantly"</span><span className="text-gray-300">);</span>
                    {'\n  '}<span className="text-gray-300">{'}'}</span>
                    {'\n'}<span className="text-gray-300">{'}'}</span>
                    {'\n\n'}<span className="text-yellow-300">startJourney</span><span className="text-gray-300">();</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRentFlexWorksCode;