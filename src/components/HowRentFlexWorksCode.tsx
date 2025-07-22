import { Home, CreditCard, CheckCircle, Building } from 'lucide-react';

const HowRentFlexWorksCode = () => {
  const codeContent = `// RentFlex Process
if (tenant.requestsHelp) {
  RentFlex.paySecurityDeposit();
  tenant.moveIn();
  tenant.repayMonthly();
}

if (owner.acceptsTenant) {
  owner.getDepositInstantly();
}`;

  const steps = [
    {
      icon: Home,
      title: "Tenant Requests Help",
      description: "Tenant finds their dream rental but needs help with the security deposit",
      lineNumbers: "2-5"
    },
    {
      icon: CreditCard,
      title: "We Pay Deposit",
      description: "RentFlex instantly covers the full security deposit amount",
      lineNumbers: "3"
    },
    {
      icon: CheckCircle,
      title: "Tenant Moves In",
      description: "Tenant can move in immediately without blocking their savings",
      lineNumbers: "4"
    },
    {
      icon: Building,
      title: "Owner Gets Paid",
      description: "Property owner receives the deposit instantly when they accept the tenant",
      lineNumbers: "8-10"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How RentFlex Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and developer-friendly approach to rental deposits
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps - Left Side */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <step.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    <span className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-mono font-semibold">
                      Line {step.lineNumbers}
                    </span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Block - Right Side */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Code Header */}
              <div className="bg-gradient-to-r from-muted to-muted/80 px-6 py-4 border-b border-border flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-sm"></div>
                  <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-3 font-mono font-medium">rentflex-process.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-8 bg-gradient-to-br from-card to-card/95">
                <pre className="text-base font-mono leading-loose text-foreground overflow-x-auto">
                  <code className="block">
                    <span className="text-green-600 font-medium">// RentFlex Process</span>{'\n'}
                    <span className="text-purple-600 font-semibold">if</span> <span className="text-muted-foreground">(</span>tenant<span className="text-orange-500">.</span>requestsHelp<span className="text-muted-foreground">) {'{'}</span>
                    {'\n  '}RentFlex<span className="text-orange-500">.</span><span className="text-blue-600 font-medium">paySecurityDeposit</span><span className="text-muted-foreground">();</span>
                    {'\n  '}tenant<span className="text-orange-500">.</span><span className="text-blue-600 font-medium">moveIn</span><span className="text-muted-foreground">();</span>
                    {'\n  '}tenant<span className="text-orange-500">.</span><span className="text-blue-600 font-medium">repayMonthly</span><span className="text-muted-foreground">();</span>
                    {'\n'}<span className="text-muted-foreground">{'}'}</span>
                    {'\n\n'}
                    <span className="text-purple-600 font-semibold">if</span> <span className="text-muted-foreground">(</span>owner<span className="text-orange-500">.</span>acceptsTenant<span className="text-muted-foreground">) {'{'}</span>
                    {'\n  '}owner<span className="text-orange-500">.</span><span className="text-blue-600 font-medium">getDepositInstantly</span><span className="text-muted-foreground">();</span>
                    {'\n'}<span className="text-muted-foreground">{'}'}</span>
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