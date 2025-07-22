import { Home, CreditCard, CheckCircle, Building } from 'lucide-react';

const HowRentFlexWorksCode = () => {
  const tenantCode = `const tenant = {
  name: "Amit",
  status: "Student",
  depositSaved: false,
};

if (!tenant.depositSaved) {
  RentFlex.applyForDeposit(tenant);
  RentFlex.approve(tenant);
  RentFlex.payDepositToOwner(tenant);
  tenant.moveIn();
  tenant.repayMonthly();
}`;

  const ownerCode = `const owner = {
  property: "2BHK near College",
  tenantApproved: false,
};

if (RentFlex.verifiesTenant()) {
  owner.tenantApproved = true;
  owner.receiveFullDeposit();
  owner.getMonthlyRent();
}`;

  const tenantFeatures = [
    "No upfront deposit",
    "Move in faster", 
    "Repay in small, easy parts"
  ];

  const ownerFeatures = [
    "Full deposit instantly",
    "Verified, ready-to-move tenants",
    "Zero cost, zero risk"
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How RentFlex Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two sides, one seamless solution
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tenant Side - Left */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">For Tenants</h3>
              <p className="text-muted-foreground">Move in without the deposit burden</p>
            </div>
            
            {/* Tenant Code Block */}
            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden mb-6">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-300 ml-2 font-mono">tenant.js</span>
              </div>
              
              <div className="p-6 bg-gray-900">
                <pre className="text-sm font-mono leading-relaxed text-gray-100 overflow-x-auto">
                  <code className="block">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">tenant</span> <span className="text-purple-400">=</span> <span className="text-gray-300">{'{'}</span>
                    {'\n  '}<span className="text-green-400">name</span><span className="text-gray-300">:</span> <span className="text-orange-400">"Amit"</span><span className="text-gray-300">,</span>
                    {'\n  '}<span className="text-green-400">status</span><span className="text-gray-300">:</span> <span className="text-orange-400">"Student"</span><span className="text-gray-300">,</span>
                    {'\n  '}<span className="text-green-400">depositSaved</span><span className="text-gray-300">:</span> <span className="text-orange-400">false</span><span className="text-gray-300">,</span>
                    {'\n'}<span className="text-gray-300">{'}'};{'\n\n'}</span>
                    <span className="text-purple-400">if</span> <span className="text-gray-300">(!</span><span className="text-blue-300">tenant</span><span className="text-gray-300">.</span><span className="text-green-400">depositSaved</span><span className="text-gray-300">) {'{'}</span>
                    {'\n  '}<span className="text-blue-300">RentFlex</span><span className="text-gray-300">.</span><span className="text-yellow-300">applyForDeposit</span><span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">);</span>
                    {'\n  '}<span className="text-blue-300">RentFlex</span><span className="text-gray-300">.</span><span className="text-yellow-300">approve</span><span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">);</span>
                    {'\n  '}<span className="text-blue-300">RentFlex</span><span className="text-gray-300">.</span><span className="text-yellow-300">payDepositToOwner</span><span className="text-gray-300">(</span><span className="text-blue-300">tenant</span><span className="text-gray-300">);</span>
                    {'\n  '}<span className="text-blue-300">tenant</span><span className="text-gray-300">.</span><span className="text-yellow-300">moveIn</span><span className="text-gray-300">();</span>
                    {'\n  '}<span className="text-blue-300">tenant</span><span className="text-gray-300">.</span><span className="text-yellow-300">repayMonthly</span><span className="text-gray-300">();</span>
                    {'\n'}<span className="text-gray-300">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Tenant Features */}
            <div className="space-y-3">
              {tenantFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-green-600 font-mono text-lg">✅</span>
                  <span className="text-lg text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner Side - Right */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-soft">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">For Owners</h3>
              <p className="text-muted-foreground">Get paid instantly, verified tenants</p>
            </div>
            
            {/* Owner Code Block */}
            <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden mb-6">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-gray-300 ml-2 font-mono">owner.js</span>
              </div>
              
              <div className="p-6 bg-gray-900">
                <pre className="text-sm font-mono leading-relaxed text-gray-100 overflow-x-auto">
                  <code className="block">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">owner</span> <span className="text-purple-400">=</span> <span className="text-gray-300">{'{'}</span>
                    {'\n  '}<span className="text-green-400">property</span><span className="text-gray-300">:</span> <span className="text-orange-400">"2BHK near College"</span><span className="text-gray-300">,</span>
                    {'\n  '}<span className="text-green-400">tenantApproved</span><span className="text-gray-300">:</span> <span className="text-orange-400">false</span><span className="text-gray-300">,</span>
                    {'\n'}<span className="text-gray-300">{'}'};{'\n\n'}</span>
                    <span className="text-purple-400">if</span> <span className="text-gray-300">(</span><span className="text-blue-300">RentFlex</span><span className="text-gray-300">.</span><span className="text-yellow-300">verifiesTenant</span><span className="text-gray-300">()) {'{'}</span>
                    {'\n  '}<span className="text-blue-300">owner</span><span className="text-gray-300">.</span><span className="text-green-400">tenantApproved</span> <span className="text-purple-400">=</span> <span className="text-orange-400">true</span><span className="text-gray-300">;</span>
                    {'\n  '}<span className="text-blue-300">owner</span><span className="text-gray-300">.</span><span className="text-yellow-300">receiveFullDeposit</span><span className="text-gray-300">();</span>
                    {'\n  '}<span className="text-blue-300">owner</span><span className="text-gray-300">.</span><span className="text-yellow-300">getMonthlyRent</span><span className="text-gray-300">();</span>
                    {'\n'}<span className="text-gray-300">{'}'}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Owner Features */}
            <div className="space-y-3">
              {ownerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-green-600 font-mono text-lg">✅</span>
                  <span className="text-lg text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRentFlexWorksCode;