<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template name="head-content">
		<div class="icon">
			<xsl:variable name="itemPath"><xsl:call-template name="sys:get-file-path"/></xsl:variable>
			<div class="item-icon">
				<xsl:choose>
					<xsl:when test="(//Mime/*[@id=current()/@kind]/@preview = 'image' or //Mime/*[@id=current()/@kind]/@preview = 'svg') and substring( @mode, 1, 1 ) != 'l'">
						<i class="item-image">
							<xsl:attribute name="style">background-image: url('/fs<xsl:value-of select="$itemPath"/>?w=232&amp;h=148');</xsl:attribute>
						</i>
					</xsl:when>
					<xsl:when test="@kind = 'app'">
						<i class="app-icon">
							<xsl:attribute name="style">background-image: url(/app/<xsl:value-of select="@ns"/>/icons/app-icon-<xsl:value-of select="@id"/>.png);</xsl:attribute>
						</i>
					</xsl:when>
					<xsl:otherwise>
						<xsl:call-template name="sys:icon-type">
							<xsl:with-param name="hiRes" select="1"/>
						</xsl:call-template>
						<xsl:if test="@kind != '_dir'">
							<span><xsl:call-template name="sys:icon-kind"/></span>
						</xsl:if>
					</xsl:otherwise>
				</xsl:choose>
			</div>
		</div>
		<div class="info">
			<h2 class="value-name"><xsl:value-of select="@name"/></h2>
			<h3 class="value-size">
				<xsl:call-template name="sys:file-size">
					<xsl:with-param name="bytes" select="@size" />
					<xsl:with-param name="kind" select="@kind" />
				</xsl:call-template>
			</h3>
		</div>
	</xsl:template>

	<xsl:template name="general-wrapper">
		<ul>
			<li>
				<span>Kind</span>
				<span class="value-kind">
					<xsl:value-of select="//Mime/*[@id=current()/@kind]/@name"/>
					<xsl:if test="substring( @mode, 1, 1 ) != 'd'"> file</xsl:if>
				</span>
			</li>
			<li>
				<span>Size</span>
				<span class="value-size">
					<xsl:value-of select="@size"/> bytes
				</span>
			</li>
			<xsl:if test="@kind = '_dir'">
				<li>
					<span>Content</span>
					<span class="value-content">
						<xsl:choose>
							<xsl:when test="count(.//*) = 0">Empty</xsl:when>
							<xsl:otherwise>
								<xsl:value-of select="count(.//*)"/> items
							</xsl:otherwise>
						</xsl:choose>
					</span>
				</li>
			</xsl:if>
			<li>
				<span>Where</span>
				<span class="value-path">~<xsl:call-template name="sys:get-file-path"/></span>
			</li>
			<li>
				<span>Modified</span>
				<span class="value-lastModified"><xsl:call-template name="sys:fileModified"/></span>
			</li>
			<li class="divider"></li>
			
			<xsl:if test="@kind = 'app'">
				<xsl:variable name="app" select="/ledger/Settings/Apps/*[@id='calculator']"/>

				<li>
					<span>Author</span>
					<span class="value-author"><xsl:value-of select="$app/@author"/></span>
				</li>
				<li>
					<span>Version</span>
					<span class="value-version"><xsl:value-of select="$app/@version"/></span>
				</li>
			</xsl:if>

			<xsl:if test="@kind != 'app'">
				<li>
					<span>Owner</span>
					<span class="value-owner"><xsl:value-of select="/ledger/Settings/User/@name"/></span>
				</li>
			</xsl:if>
		</ul>
	</xsl:template>

</xsl:stylesheet>