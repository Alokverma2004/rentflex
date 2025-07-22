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
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Block - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
              {/* Code Header */}
              <div className="bg-muted px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">rentflex-process.js</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 bg-card">
                <pre className="text-sm font-mono leading-relaxed text-foreground overflow-x-auto">
                  <code className="block">
                    <span className="text-green-600">// RentFlex Process</span>{'\n'}
                    <span className="text-purple-600">if</span> (tenant.requestsHelp) {'{'}
                    {'\n  '}RentFlex.<span className="text-blue-600">paySecurityDeposit</span>();
                    {'\n  '}tenant.<span className="text-blue-600">moveIn</span>();
                    {'\n  '}tenant.<span className="text-blue-600">repayMonthly</span>();
                    {'\n}{'}
                    {'\n\n'}
                    <span className="text-purple-600">if</span> (owner.acceptsTenant) {'{'}
                    {'\n  '}owner.<span className="text-blue-600">getDepositInstantly</span>();
                    {'\n}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Steps - Right Side */}
          <div className="order-1 lg:order-2 space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="step-card flex items-start gap-4 p-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <span className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground font-mono">
                      Line {step.lineNumbers}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRentFlexWorksCode;