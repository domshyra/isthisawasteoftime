using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Xunit;

namespace WebApp.UITests
{
    /// <summary>
    /// Used to test checboxItems
    /// </summary>
    /// <remarks>Make sure the front end webpack server is running</remarks>
    public class CheckBoxItemShould
    {
        [Fact]
        [Trait("Category", "Smoke")]
        public void LoadApplicationPage()
        {
            //Act
            string expectedTitle = "React App";
            using IWebDriver chromeDriver = new ChromeDriver();

            //Arrange
            chromeDriver.Navigate().GoToUrl("http://localhost:3000");
            string actualTitle = chromeDriver.Title;

            //Assert
            Assert.Equal(expectedTitle, actualTitle);
        }

    }
}

