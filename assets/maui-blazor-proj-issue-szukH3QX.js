import{_ as c}from"./Mdtitle-D3HGOxKw.js";import{b as a}from"./route-block-B_A1xBdJ.js";import{o as p,c as l,a as d,b as e,d as n,e as t}from"./index-B53Bi97H.js";const r="/assets/webview-permission-denied-DxXa3cRO.jpeg",u={class:"markdown-body"},m=e('<h3 id="%E5%BA%94%E7%94%A8%E7%89%88%E6%9C%AC%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#%E5%BA%94%E7%94%A8%E7%89%88%E6%9C%AC%E9%97%AE%E9%A2%98">#</a> 应用版本问题</h3><h4 id="%E5%AE%98%E6%96%B9%E8%AF%B4%E6%98%8E" tabindex="-1"><a class="header-anchor" href="#%E5%AE%98%E6%96%B9%E8%AF%B4%E6%98%8E">#</a> 官方说明</h4><p>以下引用自github中， Xamarin官方的md文档。<a href="https://github.com/xamarin/xamarin-android/blob/main/Documentation/guides/OneDotNetSingleProject.md">原文链接</a></p><h1 id="one-.net-%E2%80%9Csingle-project%E2%80%9D" tabindex="-1"><a class="header-anchor" href="#one-.net-%E2%80%9Csingle-project%E2%80%9D">#</a> One .NET “Single Project”</h1><p>One theme for Xamarin in .NET 6 is to simplify the cross-platform<br> experience between iOS and Android. We would like to provide<br> cross-platform alternatives to <code>AndroidManifest.xml</code> and <code>Info.plist</code>.<br> The eventual goal would be to remove the need for these files for<br> simple apps and project templates. Developers would only need to<br> create them when a less widely used feature is needed. We would need<br> to create item templates for <code>AndroidManifest.xml</code> and <code>Info.plist</code><br> when (and if) they are removed from project templates.</p><p>The concepts for a Xamarin “single project” go much beyond this. This<br> document is a starting point for what needs to go in the .NET Android<br> and Apple SDKs, while much of the remaining features would be in the<br> Xamarin.Forms/MAUI MSBuild targets.</p><p>For starters, we can add the following MSBuild properties to the<br> Xamarin.Android and Xamarin.iOS/Mac SDKs:</p><ul><li><code>$(ApplicationId)</code> maps to <code>/manifest/@package</code> and<br><code>CFBundleIdentifier</code></li><li><code>$(ApplicationVersion)</code> maps to <code>android:versionCode</code> or<br> . This is required to be an integer on Android and<br> less than 10000 on iOS. This value must be incremented for each<br> Google Play or App Store / TestFlight submission.</li><li><code>$(ApplicationDisplayVersion)</code> maps to <code>android:versionName</code> or<br> . This can<br> default to <code>$(ApplicationVersion)</code> when blank.</li><li><code>$(ApplicationTitle)</code> maps to <code>/application/@android:title</code> or<br><code>CFBundleDisplayName</code></li></ul><p>The final value that is generated in the <code>Info.plist</code> or<br><code>AndroidManifest.xml</code> can be overridden at different times. The final<br> source of truth is determined in order of:</p><ol><li><code>Info.plist</code> or <code>AndroidManifest.xml</code> in the iOS/Android project.</li><li>iOS/Android <code>.csproj</code> defines the MSBuild properties. This could<br> also be done in a .NET MAUI “Single Project”.</li><li>The properties set by MSBuild via other means such as<br><code>Directory.Build.props</code>, etc.</li></ol><p>Even if we did not complete the goal of complete removal of<br><code>AndroidManifest.xml</code> and <code>Info.plist</code> from Xamarin project templates,<br> these new MSBuild properties would be useful in their own right.</p><h2 id="opting-out" tabindex="-1"><a class="header-anchor" href="#opting-out">#</a> Opting out</h2><p>.NET Core introduced <code>$(GenerateAssemblyInfo)</code> which defaults to <code>true</code>.<br> Projects migrating to .NET Core might set this to <code>false</code> if they have<br> an existing <code>Properties/AssemblyInfo.cs</code>. We should have a similar<br> property to disable the behavior.</p><p><code>$(GenerateApplicationManifest)</code> defaults to <code>true</code> in .NET 6 and<br><code>false</code> in “legacy” Xamarin.Android/Xamarin.iOS.</p><p>In most cases, developers would only use <code>$(GenerateApplicationManifest)</code><br> if they want to try the new features in “legacy” Xamarin.</p><h2 id="version%2C-assemblyversion%2C-fileversion%2C-and-informationalversion" tabindex="-1"><a class="header-anchor" href="#version%2C-assemblyversion%2C-fileversion%2C-and-informationalversion">#</a> Version, AssemblyVersion, FileVersion, and InformationalVersion</h2><p>Since we are adding <em>more</em> version properties, we should consider<br> adding defaults to consolidate the assembly-level attributes when<br> using <code>$(GenerateAssemblyInfo)</code>.</p><p>The full list of defaults might be something like:</p>',18),h=n("pre",{class:"language-xml"},[n("code",{class:"language-xml"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationVersion")]),t(),n("span",{class:"token attr-name"},"Condition"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(),n("span",{class:"token punctuation"},"'"),t("$(ApplicationVersion)' == '' "),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Version")]),t(),n("span",{class:"token attr-name"},"Condition"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(),n("span",{class:"token punctuation"},"'"),t("$(ApplicationDisplayVersion)' != '' "),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("$(ApplicationDisplayVersion)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Version")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationDisplayVersion")]),t(),n("span",{class:"token attr-name"},"Condition"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(),n("span",{class:"token punctuation"},"'"),t("$(ApplicationDisplayVersion)' == '' "),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("$(Version)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766880-65534"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<PropertyGroup>
  <ApplicationVersion Condition=" '$(ApplicationVersion)' == '' ">1</ApplicationVersion>
  <Version Condition=" '$(ApplicationDisplayVersion)' != '' ">$(ApplicationDisplayVersion)</Version>
  <ApplicationDisplayVersion Condition=" '$(ApplicationDisplayVersion)' == '' ">$(Version)</ApplicationDisplayVersion>
</PropertyGroup>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766880-65534","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),k=e('<p>The dotnet/sdk defaults <code>$(Version)</code> to 1.0.0 and uses it to set:</p><ul><li><code>$(AssemblyVersion)</code></li><li><code>$(FileVersion)</code></li><li><code>$(InformationalVersion)</code></li></ul><p>If we expect users to set <code>$(ApplicationVersion)</code> and<br><code>$(ApplicationDisplayVersion)</code> in mobile apps, we can use the value of<br><code>$(ApplicationDisplayVersion)</code> for <code>$(Version)</code> as well.</p><h2 id="android-template" tabindex="-1"><a class="header-anchor" href="#android-template">#</a> Android Template</h2><p>The default Android project template would include:</p>',5),y=n("pre",{class:"language-xml"},[n("code",{class:"language-xml"},[n("span",{class:"token comment"},"<!-- .csproj -->"),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Project")]),t(),n("span",{class:"token attr-name"},"Sdk"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Microsoft.NET.Sdk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TargetFramework")]),n("span",{class:"token punctuation"},">")]),t("net6.0-android"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("TargetFramework")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t("@string/application_title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t("com.companyname.myapp"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t("1.0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Project")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token comment"},"<!-- Resources/values/strings.xml -->"),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("resources")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("string")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("application_title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("MyApp"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("string")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("resources")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766882-99297"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<!-- .csproj -->
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0-android</TargetFramework>
    <ApplicationTitle>@string/application_title</ApplicationTitle>
    <ApplicationId>com.companyname.myapp</ApplicationId>
    <ApplicationVersion>1</ApplicationVersion>
    <ApplicationDisplayVersion>1.0</ApplicationDisplayVersion>
  </PropertyGroup>
</Project>

<!-- Resources/values/strings.xml -->
<resources>
    <string name="application_title">MyApp</string>
</resources>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766882-99297","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),f=e('<p>Removed from <code>AndroidManifest.xml</code> in the project template:</p><ul><li><code>/manifest/@android:versionCode=&quot;1&quot;</code></li><li><code>/manifest/@android:versionName=&quot;1.0&quot;</code></li><li><code>/manifest/@package=&quot;com.companyname.myapp&quot;</code></li><li><code>/application/@android:label=&quot;MyApp&quot;</code></li></ul><p>All values could be added later to the <code>AndroidManifest.xml</code> and<br> override the MSBuild properties.</p><h2 id="ios-template" tabindex="-1"><a class="header-anchor" href="#ios-template">#</a> iOS Template</h2><p>The default iOS project template would include:</p>',5),g=n("pre",{class:"language-xml"},[n("code",{class:"language-xml"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Project")]),t(),n("span",{class:"token attr-name"},"Sdk"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Microsoft.NET.Sdk"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("TargetFramework")]),n("span",{class:"token punctuation"},">")]),t("net6.0-ios"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("TargetFramework")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t("MyApp"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t("com.companyname.myapp"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t("1.0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Project")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766884-12159"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net6.0-ios</TargetFramework>
    <ApplicationTitle>MyApp</ApplicationTitle>
    <ApplicationId>com.companyname.myapp</ApplicationId>
    <ApplicationVersion>1</ApplicationVersion>
    <ApplicationDisplayVersion>1.0</ApplicationDisplayVersion>
  </PropertyGroup>
</Project>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766884-12159","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),A=e('<p>Removed from <code>Info.plist</code> in the project template:</p><ul><li><code>CFBundleDisplayName</code></li><li><code>CFBundleIdentifier</code></li><li><code>CFBundleVersion</code></li><li><code>CFBundleShortVersionString</code></li></ul><p>All values could be added later to the <code>Info.plist</code> and override the<br> MSBuild properties.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example">#</a> Example</h2><p>The .NET MAUI project template (<code>dotnet new maui</code>):</p><ul><li><code>HelloMaui/HelloMaui.csproj</code> - multi-targeted for <code>net6.0-android</code>,<br><code>net6.0-ios</code>, <code>net6.0-maccatalyst</code>, etc.</li></ul><p>Where the versions can be setup for both platforms at once with:</p>',7),b=n("pre",{class:"language-xml"},[n("code",{class:"language-xml"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("Project")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t("Hello!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationTitle")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t("com.companyname.hello"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationId")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t("1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationVersion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t("1.0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ApplicationDisplayVersion")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("PropertyGroup")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("Project")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766885-81891"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<Project>
  <PropertyGroup>
    <ApplicationTitle>Hello!</ApplicationTitle>
    <ApplicationId>com.companyname.hello</ApplicationId>
    <ApplicationVersion>1</ApplicationVersion>
    <ApplicationDisplayVersion>1.0</ApplicationDisplayVersion>
  </PropertyGroup>
</Project>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766885-81891","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),E=e('<p>In this project, a developer would increment <code>$(ApplicationVersion)</code><br> and <code>$(ApplicationDisplayVersion)</code> for each public release.</p><h2 id="localization" tabindex="-1"><a class="header-anchor" href="#localization">#</a> Localization</h2><p><code>$(ApplicationTitle)</code> can easily be localized on Android by using an<br><strong>AndroidResource</strong> as the value.</p><p>However, on iOS you would need to specify<br> in the <code>Info.plist</code> and provide<br><code>CFBundleName</code> or <code>CFBundleDisplayName</code> in a <code>.strings</code> file for each<br> supported language. For our first implementation, you would omit<br><code>$(ApplicationTitle)</code> from the <code>.csproj</code> file if you need to localize<br> it.</p><p>One can imagine supporting a <code>.resx</code> key via a new<br><code>$(LocalizedApplicationTitle)</code> property. This would likely need to be<br> implemented in Xamarin.Forms/MAUI MSBuild tasks as a way to provide a<br> single <code>.resx</code> file to be translated to the appropriate format for iOS<br> and Android. This is a consideration for the future.</p><h2 id="other-future-work" tabindex="-1"><a class="header-anchor" href="#other-future-work">#</a> Other Future Work</h2><p>In future iterations, we can consider additional MSBuild properties<br> beyond <code>$(ApplicationTitle)</code>, <code>$(ApplicationId)</code>,<br><code>$(ApplicationVersion)</code>, and <code>$(ApplicationDisplayVersion)</code>.</p><p>This is a list of additional properties that cover most of the<br> property pages in Visual Studio:</p><ul><li><code>$(AndroidMinSdkVersion)</code></li><li><code>$(AndroidTargetSdkVersion)</code></li><li><code>$(AndroidInstallLocation)</code></li><li><code>$(iOSMinimumOSVersion)</code>, <code>$(tvOSMinimumOSVersion)</code>,<br><code>$(MacMinimumOSVersion)</code>, and potentially other variants for<br> Catalyst, etc.</li><li><code>$(AppleLaunchScreen)</code></li><li><code>$(AppleDeviceFamily)</code> - <code>iPhone</code>, <code>iPad</code>, <code>Universal</code>, <code>TV</code>, and<br> potentially other variants for Catalyst, etc.</li><li><code>$(AppleMainStoryboard)</code></li><li><code>$(ApplicationIcon)</code></li><li><code>$(ApplicationRoundIcon)</code> or <code>$(AndroidRoundIcon)</code></li></ul><p>Some settings would make more sense as an item group:</p><ul><li><code>@(iOSSupportedInterfaceOrientations)</code> <em>iOS only</em> - an item group<br> that needs to support <code>UISupportedInterfaceOrientations</code> and<br><code>UISupportedInterfaceOrientations~ipad</code></li><li><code>@(ApplicationPermission)</code> - an item group that maps to common<br> permissions, similar to some behavior in Xamarin.Essentials.</li></ul><p>To completely remove <code>AndroidManifest.xml</code> we would need to somehow<br> provide (or emit by default):</p><ul><li><code>/android/@android:allowBackup=&quot;true&quot;</code></li><li><code>/android/@android:supportsRtl=&quot;true&quot;</code></li></ul><p>To completely remove <code>Info.plist</code> we would need to somehow<br> provide (or emit by default):</p><ul><li><code>LSRequiresIPhoneOS</code></li><li><code>UIRequiredDeviceCapabilities</code> for <code>armv7</code></li></ul><h4 id="%E7%AE%80%E5%8D%95%E6%80%BB%E7%BB%93%E4%B8%80%E4%B8%8B" tabindex="-1"><a class="header-anchor" href="#%E7%AE%80%E5%8D%95%E6%80%BB%E7%BB%93%E4%B8%80%E4%B8%8B">#</a> 简单总结一下</h4><p>之于Maui 多平台应用（包括使用maui blazor hybrid 混合多平台）：</p><ul><li>不同目标平台可单独设置构建应用的版本</li><li>优先级：目标平台配置 &gt; .csproj 配置(MSBuild)</li><li>ApplicationDisplayVersion 为空时会取ApplicationVersion 的值</li><li>ApplicationVersion 值会被映射至ios/android 相关的版本属性</li><li>都没有配置，则默认1.0</li><li>可以使用条件Condition配置控制版本信息</li></ul><p>之于自己的项目，非必要分目标应用管理版本的话，可统一使用 .csproj 的配置：</p>',19),v=n("pre",null,[n("code",null,`<!-- Versions -->
<ApplicationDisplayVersion>1.0.0</ApplicationDisplayVersion>
<ApplicationVersion>1</ApplicationVersion>
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766886-71227"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<!-- Versions -->
<ApplicationDisplayVersion>1.0.0</ApplicationDisplayVersion>
<ApplicationVersion>1</ApplicationVersion>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766886-71227","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),w=n("p",null,"注意！如果你在window 上进行开发，可能需要手动移出window 目标平台的版本配置项目，Platforms -> windows ->Package.appxmanifest",-1),C=n("p",null,"文件内：",-1),B=n("pre",null,[n("code",null,`<!--Version="0.0.4.0"  需要从此项目内移出Version 配置-->
<Identity Name="maui-package-name-placeholder" Publisher="CN=aoaoms.com" />
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1722501766887-49829"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<!--Version="0.0.4.0"  需要从此项目内移出Version 配置-->
<Identity Name="maui-package-name-placeholder" Publisher="CN=aoaoms.com" />
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1722501766887-49829","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),V=e('<h4 id="maui%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF" tabindex="-1"><a class="header-anchor" href="#maui%E8%8E%B7%E5%8F%96%E5%BA%94%E7%94%A8%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF">#</a> Maui获取应用版本信息</h4><p>可以使用IAppInfo 接口在应用内部获取当前应用的相关信息：</p><ul><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.name#microsoft-maui-applicationmodel-iappinfo-name">Name</a> — 应用名称。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.packagename#microsoft-maui-applicationmodel-iappinfo-packagename">PackageName</a> — 包名称或应用标识符，例如 <code>com.microsoft.myapp</code>。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.versionstring#microsoft-maui-applicationmodel-iappinfo-versionstring">VersionString</a> — 应用版本，例如 <code>1.0.0</code>。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.version#microsoft-maui-applicationmodel-iappinfo-version">Version</a> — 应用版本，作为 <a href="https://learn.microsoft.com/zh-cn/dotnet/api/system.version">Version</a> 对象。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.buildstring#microsoft-maui-applicationmodel-iappinfo-buildstring">BuildString</a> — 版本的内部版本号，例如 <code>1000</code>。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.requestedtheme#microsoft-maui-applicationmodel-iappinfo-requestedtheme">RequestedTheme</a> — 检测到的系统或应用主题。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.packagingmodel#microsoft-maui-applicationmodel-iappinfo-packagingmodel">PackagingModel</a> — 应用的打包模型。</li><li><a href="https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.maui.applicationmodel.iappinfo.requestedlayoutdirection#microsoft-maui-applicationmodel-iappinfo-requestedlayoutdirection">RequestedLayoutDirection</a> — 系统或应用请求的布局方向。</li></ul><p>e.g. - AppInfo.Current.VersionString</p><h3 id="%E6%9E%84%E5%BB%BA%E4%B8%8E%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8" tabindex="-1"><a class="header-anchor" href="#%E6%9E%84%E5%BB%BA%E4%B8%8E%E5%8F%91%E5%B8%83%E5%BA%94%E7%94%A8">#</a> 构建与发布应用</h3><h4 id="android%E5%BA%94%E7%94%A8%E5%8F%91%E5%B8%83" tabindex="-1"><a class="header-anchor" href="#android%E5%BA%94%E7%94%A8%E5%8F%91%E5%B8%83">#</a> Android应用发布</h4><p>切记！如果发布到android设备，需要构建apk文件，按照<a href="https://learn.microsoft.com/zh-cn/dotnet/maui/android/deployment/?view=net-maui-8.0">官方操作</a> 可以连接到android模拟器或者Usb链接到真机进行构建包；接着，存储密匙并签名，然后再分发创建apk。 拷贝apk到设备，允许安装未知来源的应用 授权安装即可。如果遇到，分析包错误的提示，尝试关闭Usb调试模式后再尝试！</p><h3 id="%E8%AE%BE%E5%A4%87%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98webview" tabindex="-1"><a class="header-anchor" href="#%E8%AE%BE%E5%A4%87%E6%9D%83%E9%99%90%E9%97%AE%E9%A2%98webview">#</a> 设备权限问题WebView</h3><p>使用maui blazor hybrid开发的混合应用，当需要在页面中访问设备的硬件能力（麦克风或摄像头等），需要针对页面单独提交处理相应的权限授权。window平台中使用blazorwebview 托管应用页面，而android中使用了chromium 的webview托管。即使maui应用设置了app级的设备功能访问授权，但是页面级的授权也必须要做，假定你需要在页面中访问设备的相关能力。APP级的授权是必须，页面授权按应用需求具体再做。<a href="https://learn.microsoft.com/zh-cn/dotnet/maui/user-interface/controls/webview?view=net-maui-8.0&amp;pivots=devices-android#handle-permissions-on-android" title="官方文档">官方的解释</a></p><h4 id="%E6%88%91%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98" tabindex="-1"><a class="header-anchor" href="#%E6%88%91%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98">#</a> 我遇到的问题</h4><p>页面中使用了一个js库rythm.js 用于显示麦克风输入时的音频效果；通过net 同步调用js的操作，该库内部接口有请求页面授权设备麦克风访问<br> mediaDevices.getUserMedia() ；期待的效果应该如下：</p><p>Debug运行在windows时，效果可以显现；但在android环境中，该效果则不会出现；会看到在控制台输出了授权被拒绝的信息：<br> 14:33:25:432 [cr_media] Requires MODIFY_AUDIO_SETTINGS and RECORD_AUDIO. No audio device will be available for recording<br> 14:33:25:432 [chromium] [INFO:CONSOLE(0)] “Uncaught (in promise) NotAllowedError: Permission denied”, source: <a href="https://0.0.0.0/">https://0.0.0.0/</a> (0)<br> 14:33:25:899 [chromium] [INFO:CONSOLE(63)] “-------------rythmFromMicro-----------”, source: <a href="https://0.0.0.0/Components/Pages/Home.razor.js">https://0.0.0.0/Components/Pages/Home.razor.js</a> (63)</p><img src="'+r+'" width="90%" class="img-thumbnail"><h3 id="android%E5%92%8Cios%E4%BF%9D%E5%AD%98%E5%9B%BE%E7%89%87%E5%88%B0%E7%9B%B8%E5%86%8C" tabindex="-1"><a class="header-anchor" href="#android%E5%92%8Cios%E4%BF%9D%E5%AD%98%E5%9B%BE%E7%89%87%E5%88%B0%E7%9B%B8%E5%86%8C">#</a> android和ios保存图片到相册</h3><p><a href="https://learn.microsoft.com/en-us/answers/questions/1321167/how-to-save-image-to-album-of-cellphone-in-maui">https://learn.microsoft.com/en-us/answers/questions/1321167/how-to-save-image-to-album-of-cellphone-in-maui</a></p><p><a href="https://learn.microsoft.com/en-us/answers/questions/1024872/how-to-save-image-in-while-image-is-taken-from-cam">https://learn.microsoft.com/en-us/answers/questions/1024872/how-to-save-image-in-while-image-is-taken-from-cam</a></p><h3 id="%E5%9B%BA%E5%AE%9A%E5%B1%8F%E5%B9%95%E6%96%B9%E5%90%91" tabindex="-1"><a class="header-anchor" href="#%E5%9B%BA%E5%AE%9A%E5%B1%8F%E5%B9%95%E6%96%B9%E5%90%91">#</a> 固定屏幕方向</h3><p><a href="https://learn.microsoft.com/en-us/answers/questions/878990/how-to-change-screen-orientation-in-maui">https://learn.microsoft.com/en-us/answers/questions/878990/how-to-change-screen-orientation-in-maui</a><br> android平台，需要在活动类中添加设置：<br> ScreenOrientation= ScreenOrientation.Landscape,</p>',18),P="Maui Blazor hybrid 混合开发项目问题汇总",_="2024-03-04T00:00:00.000Z",F="2024-03-04T00:00:00.000Z",M=!1,N="test",T={__name:"maui-blazor-proj-issue",setup(x,{expose:s}){const o={title:"Maui Blazor hybrid 混合开发项目问题汇总",date:"2024-03-04T00:00:00.000Z",update:"2024-03-04T00:00:00.000Z",top:!1,tags:"test"};return s({frontmatter:o}),(I,D)=>{const i=c;return p(),l("div",u,[d(i,{title:o.title,update:o.update},null,8,["title","update"]),m,h,k,y,f,g,A,b,E,v,w,C,B,V])}}};typeof a=="function"&&a(T);export{_ as date,T as default,N as tags,P as title,M as top,F as update};
